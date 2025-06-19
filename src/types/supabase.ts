export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      Project: {
        Row: {
          id: string;
          userId: string;
          name: string;
          description: string;
          category: string;
        };
        Insert: {
          id: string;
          userId: string;
          name: string;
          description: string;
          category: string;
        };
        Update: Partial<{
          id: string;
          userId: string;
          name: string;
          description: string;
          category: string;
        }>;
        Relationships: [];
      };
    };
  };
}
