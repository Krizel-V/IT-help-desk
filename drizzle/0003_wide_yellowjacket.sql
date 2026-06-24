CREATE TABLE "history" (
	"history_id" integer,
	"finishDate" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "history" ADD CONSTRAINT "history_history_id_users_id_fk" FOREIGN KEY ("history_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;