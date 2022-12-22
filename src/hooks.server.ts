import type { Handle } from '@sveltejs/kit'
import { locale, locales } from 'svelte-i18n'

//const routeRegex = new RegExp(/^\/[^.]*([?#].*)?$/);

export const handle: Handle = async ({ event, resolve }) => {
	//const lang = event.request.headers.get('accept-language')?.split(',')[0];
	/*let locale2 = event.url.pathname.match(/[^/]+?(?=\/|$)/);*/
	//console.log(locale2)
	//let locale2 = event.url.pathname.match(/[^/]+?(?=\/|$)/);

	//let locale = locales.find((l) => ${l}.toLowerCase() === ${event.url.pathname.match(/[^/]+?(?=\/|$)/)}.toLowerCase());

	//return new Response(locales);
	/*if (event.url.pathname.startsWith('/th')) {
		return new Response('custom response');
	}*/
	 
	  //const response = await resolve(event);
	  //return response;
	  //locale.set('/'+locale2);

	/*const lang = event.request.headers.get('accept-language')?.split(',')[0]
	if (lang) {
		locale.set(lang)
	}*/
	return resolve(event)


  // If this request is a route request
  /*if (routeRegex.test(pathname)) {
    // Get defined locales
    const supportedLocales = locales.get();

    // Try to get locale from `pathname`.
    let locale = supportedLocales.find((l) => `${l}`.toLowerCase() === `${pathname.match(/[^/]+?(?=\/|$)/)}`.toLowerCase());

    // If route locale is not supported
    if (!locale) {
      // Get user preferred locale
      locale = `${`${request.headers.get('accept-language')}`.match(/[a-zA-Z]+?(?=-|_|,|;)/)}`.toLowerCase();

      // Set default locale if user preferred locale does not match
      if (!supportedLocales.includes(locale)) locale = defaultLocale;

      // 301 redirect
      return new Response(undefined, { headers: { 'location': `/${locale}${pathname}` }, status: 301 });
    }

    // Add html `lang` attribute
    return resolve(event, {
      transformPageChunk: ({ html }) => html.replace(/<html.*>/, `<html lang="${locale}">`),
    });
  }

  return resolve(event);*/
};