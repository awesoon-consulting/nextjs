CREATE TABLE "awards" (
	"id" serial PRIMARY KEY NOT NULL,
	"source_id" text NOT NULL,
	"external_id" text NOT NULL,
	"country" text NOT NULL,
	"title" text NOT NULL,
	"buyer" text,
	"category_codes" jsonb NOT NULL,
	"categories" jsonb NOT NULL,
	"value" numeric,
	"currency" text,
	"status" text,
	"url" text,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"supplier" text,
	"awarded" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "buyers" (
	"id" serial PRIMARY KEY NOT NULL,
	"country" text NOT NULL,
	"name" text NOT NULL,
	"external_id" text,
	"source_id" text NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "code_crosswalk" (
	"from_scheme" text NOT NULL,
	"from_code" text NOT NULL,
	"to_scheme" text NOT NULL,
	"to_code" text NOT NULL,
	"source_id" text NOT NULL,
	CONSTRAINT "code_crosswalk_from_scheme_from_code_to_scheme_to_code_pk" PRIMARY KEY("from_scheme","from_code","to_scheme","to_code")
);
--> statement-breakpoint
CREATE TABLE "codes" (
	"scheme" text NOT NULL,
	"code" text NOT NULL,
	"title" text NOT NULL,
	"parent" text,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "codes_scheme_code_pk" PRIMARY KEY("scheme","code")
);
--> statement-breakpoint
CREATE TABLE "ingest_runs" (
	"id" serial PRIMARY KEY NOT NULL,
	"source_id" text NOT NULL,
	"started_at" timestamp with time zone NOT NULL,
	"finished_at" timestamp with time zone,
	"rows" integer DEFAULT 0 NOT NULL,
	"status" text NOT NULL,
	"error" text,
	"raw_file_ref" text
);
--> statement-breakpoint
CREATE TABLE "platform_changes" (
	"id" serial PRIMARY KEY NOT NULL,
	"vendor" text NOT NULL,
	"kind" text NOT NULL,
	"external_id" text NOT NULL,
	"title" text NOT NULL,
	"url" text,
	"published" timestamp with time zone,
	"source_id" text NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "platforms_api" (
	"name" text PRIMARY KEY NOT NULL,
	"apis_guru_id" text NOT NULL,
	"auth" jsonb NOT NULL,
	"webhooks" boolean NOT NULL,
	"spec_url" text NOT NULL,
	"version" text,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "sources" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"url" text NOT NULL,
	"licence" text NOT NULL,
	"attribution" text NOT NULL,
	"keyed" boolean DEFAULT false NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "tenders" (
	"id" serial PRIMARY KEY NOT NULL,
	"source_id" text NOT NULL,
	"external_id" text NOT NULL,
	"country" text NOT NULL,
	"title" text NOT NULL,
	"buyer" text,
	"category_codes" jsonb NOT NULL,
	"categories" jsonb NOT NULL,
	"value" numeric,
	"currency" text,
	"status" text,
	"url" text,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	"published" timestamp with time zone,
	"closes" timestamp with time zone
);
--> statement-breakpoint
CREATE TABLE "wages" (
	"id" serial PRIMARY KEY NOT NULL,
	"source_id" text NOT NULL,
	"country" text NOT NULL,
	"region" text NOT NULL,
	"occupation_code" text NOT NULL,
	"occupation_name" text NOT NULL,
	"median" numeric,
	"mean" numeric,
	"unit" text NOT NULL,
	"currency" text NOT NULL,
	"period" text NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX "awards_source_ext_uq" ON "awards" USING btree ("source_id","external_id");--> statement-breakpoint
CREATE INDEX "awards_country_awarded_idx" ON "awards" USING btree ("country","awarded");--> statement-breakpoint
CREATE UNIQUE INDEX "buyers_country_name_uq" ON "buyers" USING btree ("country","name");--> statement-breakpoint
CREATE INDEX "ingest_runs_source_idx" ON "ingest_runs" USING btree ("source_id","started_at");--> statement-breakpoint
CREATE UNIQUE INDEX "platform_changes_uq" ON "platform_changes" USING btree ("source_id","external_id");--> statement-breakpoint
CREATE UNIQUE INDEX "tenders_source_ext_uq" ON "tenders" USING btree ("source_id","external_id");--> statement-breakpoint
CREATE INDEX "tenders_country_closes_idx" ON "tenders" USING btree ("country","closes");--> statement-breakpoint
CREATE UNIQUE INDEX "wages_uq" ON "wages" USING btree ("source_id","region","occupation_code","unit","period");