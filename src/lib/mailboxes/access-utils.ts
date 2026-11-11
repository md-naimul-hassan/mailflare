import type { AppDatabase } from "@/db";

/** Shared-mailbox features are always available (licensing removed). */
export async function isTeamMailboxSharingEnabled(_db: AppDatabase): Promise<boolean> {
	return true;
}
