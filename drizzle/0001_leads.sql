CREATE TABLE "leads" (
	"id" serial PRIMARY KEY NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"submitted_at" timestamp with time zone NOT NULL,
	"name" text NOT NULL,
	"company" text NOT NULL,
	"email" text NOT NULL,
	"phone" text,
	"industry" text NOT NULL,
	"company_size" text NOT NULL,
	"problems" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"other_problem" text,
	"timeline" text NOT NULL,
	"budget" text NOT NULL,
	"message" text,
	"locale" text NOT NULL,
	"source_url" text,
	"utm_source" text,
	"utm_medium" text,
	"utm_campaign" text,
	"utm_term" text,
	"utm_content" text,
	"landing_page" text,
	"referrer" text,
	"ip_hash" text,
	"user_agent" text,
	"status" text DEFAULT 'new' NOT NULL
);
--> statement-breakpoint
ALTER TABLE "leads" ENABLE ROW LEVEL SECURITY;--> statement-breakpoint
CREATE UNIQUE INDEX "leads_email_submitted_uq" ON "leads" USING btree ("email","submitted_at");--> statement-breakpoint
CREATE INDEX "leads_created_idx" ON "leads" USING btree ("created_at");