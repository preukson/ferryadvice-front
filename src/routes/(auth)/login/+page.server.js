import { fail } from '@sveltejs/kit';
export const prerender = true;

/*export async function load({ cookies }) {
    const user = {email: 'asdf@gmail.com',name: 'John',password: 'asdf'};
    return { user };
  }
   

  export const actions = {
    login: async ({ cookies, request }) => {
      const data = await request.formData();
      const email = data.get('email');
      const password = data.get('password');
   
      if (!email) {
            return fail(400, { email, missing: true });
        }
        
      const user = {email: 'asdf@gmail.com',name: 'John',password: 'asdf'};

      if (!user || user.password !== password) {
        return fail(400, { email, incorrect: true });
       }
      //cookies.set('sessionid', user);
   
      return { success: true };
    },
    register: async (event) => {
      // TODO register the user
    }
  };*/