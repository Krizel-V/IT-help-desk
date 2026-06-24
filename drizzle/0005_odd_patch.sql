ALTER TABLE "history" ALTER COLUMN "finishDate" SET DATA TYPE timestamp;--> statement-breakpoint
ALTER TABLE "users" ADD COLUMN "dateCreated" timestamp NOT NULL;