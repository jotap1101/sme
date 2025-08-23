import { relations } from "drizzle-orm";

import { account, candidate, entity, resume, session, user } from "@/db/schema";

export const userRelations = relations(user, ({ one, many }) => ({
  sessions: many(session),
  accounts: many(account),
  entity: one(entity, {
    fields: [user.entityId],
    references: [entity.id],
  }),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));

export const entityRelations = relations(entity, ({ many }) => ({
  candidates: many(candidate),
  resumes: many(resume),
  users: many(user),
}));
