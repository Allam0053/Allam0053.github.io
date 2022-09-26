export interface BaseUserT {
  ip: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface RatingUserT extends BaseUserT {
  rating: number;
  share: boolean;
}

export interface VisitUserT extends BaseUserT {
  timeElapsed: number;
  href: string;
  visitCount: number;
}

export interface LikeDocumentT {
  slug: string;
  ratingCount: number;
  users: Record<string, Omit<RatingUserT, 'ip'>>;
}

export interface VisitDocumentT {
  path: string;
  visitCount: number;
  meanTimeElapsed: number;
  users: Record<string, Omit<VisitUserT, 'ip'>>;
}

export interface ResVisitDocumentT {
  ref: unknown;
  ts: number;
  data: VisitDocumentT;
}

export interface ResLikeDocumentT {
  ref: unknown;
  ts: number;
  data: LikeDocumentT;
}
