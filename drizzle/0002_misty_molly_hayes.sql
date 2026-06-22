ALTER TABLE "users" DROP CONSTRAINT "users_email_unique";--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "job" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "assignee" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "priority" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "status" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "name";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "age";--> statement-breakpoint
ALTER TABLE "users" DROP COLUMN "email";