export interface Auth {
  //  id?: string;
    name: string;
    email: string;
    password: string; 
    role: 'student' | 'teacher' | 'admin'|''; 
  }
  