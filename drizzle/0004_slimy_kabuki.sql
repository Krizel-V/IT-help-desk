ALTER TABLE "history" ALTER COLUMN "finishDate" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "history" ALTER COLUMN "finishDate" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "history" ALTER COLUMN "finishDate" SET NOT NULL;