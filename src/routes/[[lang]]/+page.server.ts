import { redirect } from "@sveltejs/kit"
import type { Actions, PageServerLoad } from "./$types"

export const prerender = false;

export const load: PageServerLoad =async ({locals}) => {
    console.log(locals)
}

export const actions:Actions = {
    login: async ({cookies}) => {
        cookies.set("auth", "regularusertoken",{
            path: "/",
            httpOnly: true,
            samSite: "strict",
            secure: process.env.NODE_ENV === "production",
            maxAge: 60*60*24*7, // 1 week
        })

        throw redirect(303,"/")
    }
}