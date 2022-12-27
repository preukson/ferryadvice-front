<script>
import {page} from '$app/stores'
import { locale } from 'svelte-i18n'
export let configData
let selected = 'en';
let currencySelected = 'USD';

function handleLocaleChange (){
    locale.set(selected);
}
function handleCurrencyChange (){
    locale.set(currencySelected);
}

</script>


<div class="offcanvas offcanvas-start" tabindex="-1" id="sidebarPanel">
    <div class="offcanvas-body">
        <div class="offcanvas_close_button">
            <a href="/" aria-current={$page.url.pathname === '/' ? 'page' : undefined }  data-bs-dismiss="offcanvas">
                <ion-icon name="close"></ion-icon>
            </a>
        </div>
        <ul class="listview flush transparent no-line image-listview">
            <li>
                <div class="item">
                    <div class="icon-box">
                        <img src="/assets/img/flags/{selected}.svg" class="rounded shadow-sm"  width="20" height="20">
                    </div>
                    <div class="in">
                        <select bind:value={selected} on:change={handleLocaleChange}  class="form-select">
                            {#each configData.configs.languages as lang }
                                <option value={lang.code}>{ lang.native_name }</option>
                            {/each}
                        </select>
                    </div>
                </div>
            </li>
            <li>
                <div class="item">
                    <div class="icon-box">
                        THB
                    </div>
                    <div class="in">
                        <select bind:value={currencySelected} on:change={handleCurrencyChange}  class="form-select">
                            {#each configData.configs.currencies as currency }
                                <option value={currency.code}>{ currency.name }</option>
                            {/each}
                        </select>
                    </div>
                </div>
            </li>
            <li>
                <a href="/" aria-current={$page.url.pathname === '/' ? 'page' : undefined} class="item">
                    <div class="icon-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
                          </svg>
                    </div>
                    <div class="in">
                        Home
                    </div>
                </a>
            </li>
            <li>
                <a href="/contactus" aria-current={$page.url.pathname === '/contactus' ? 'page' : undefined} class="item">
                    <div class="icon-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-unlock" viewBox="0 0 16 16">
                            <path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z"/>
                          </svg>
                    </div>
                    <div class="in">
                        Log In / Register
                    </div>
                </a>
            </li>
            <li>
                <a href="" class="item">
                    <div class="icon-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightning-charge-fill" viewBox="0 0 16 16">
                            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
                          </svg>
                        
                    </div>
                    <div class="in">
                        My Booking
                    </div>
                </a>
            </li>
            <li>
                <a href="/contactus" aria-current={$page.url.pathname === '/contactus' ? 'page' : undefined} class="item">
                    <div class="icon-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
                            <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
                            <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                          </svg>
                    </div>
                    <div class="in">
                        Contact Us
                    </div>
                </a>
            </li>
            <li>
                <a href="" class="item">
                    <div class="icon-box">
                        
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-patch-question" viewBox="0 0 16 16">
                            <path d="M8.05 9.6c.336 0 .504-.24.554-.627.04-.534.198-.815.847-1.26.673-.475 1.049-1.09 1.049-1.986 0-1.325-.92-2.227-2.262-2.227-1.02 0-1.792.492-2.1 1.29A1.71 1.71 0 0 0 6 5.48c0 .393.203.64.545.64.272 0 .455-.147.564-.51.158-.592.525-.915 1.074-.915.61 0 1.03.446 1.03 1.084 0 .563-.208.885-.822 1.325-.619.433-.926.914-.926 1.64v.111c0 .428.208.745.585.745z"/>
                            <path d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"/>
                            <path d="M7.001 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0z"/>
                          </svg>
                    </div>
                    <div class="in">
                        Help Center
                    </div>
                </a>
            </li>
        </ul>
        <h5 class="ps-2">Inspiration</h5>
        <ul class="listview flush transparent no-line image-listview">
            <li>
                <a href="" class="item">
                    <div class="icon-box">
                        
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-album" viewBox="0 0 16 16">
                            <path d="M5.5 4a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5zm1 7a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3z"/>
                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                          </svg>
                    </div>
                    <div class="in">
                        Island
                    </div>
                </a>
            </li>
            <li>
                <a href="" class="item">
                    <div class="icon-box">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-album" viewBox="0 0 16 16">
                            <path d="M5.5 4a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5zm1 7a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3z"/>
                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                          </svg>
                    </div>
                    <div class="in">
                        Top Destinations
                    </div>
                </a>
            </li>
            <li>
                <a href="" class="item">
                    <div class="icon-box">
                        
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-journal-album" viewBox="0 0 16 16">
                            <path d="M5.5 4a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-5a.5.5 0 0 0-.5-.5h-5zm1 7a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3z"/>
                            <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
                            <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
                          </svg>
                    </div>
                    <div class="in">
                        Review & Travel Blog
                    </div>
                </a>
            </li>
            <li>
                <a href="" class="item">
                    <div class="icon-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bus-front" viewBox="0 0 16 16">
                            <path d="M5 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-6-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Zm1-6c-1.876 0-3.426.109-4.552.226A.5.5 0 0 0 3 4.723v3.554a.5.5 0 0 0 .448.497C4.574 8.891 6.124 9 8 9c1.876 0 3.426-.109 4.552-.226A.5.5 0 0 0 13 8.277V4.723a.5.5 0 0 0-.448-.497A44.303 44.303 0 0 0 8 4Zm0-1c-1.837 0-3.353.107-4.448.22a.5.5 0 1 1-.104-.994A44.304 44.304 0 0 1 8 2c1.876 0 3.426.109 4.552.226a.5.5 0 1 1-.104.994A43.306 43.306 0 0 0 8 3Z"/>
                            <path d="M15 8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1V2.64c0-1.188-.845-2.232-2.064-2.372A43.61 43.61 0 0 0 8 0C5.9 0 4.208.136 3.064.268 1.845.408 1 1.452 1 2.64V4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v3.5c0 .818.393 1.544 1 2v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2c.607-.456 1-1.182 1-2V8ZM8 1c2.056 0 3.71.134 4.822.261.676.078 1.178.66 1.178 1.379v8.86a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11.5V2.64c0-.72.502-1.301 1.178-1.379A42.611 42.611 0 0 1 8 1Z"/>
                          </svg>
                          
                    </div>
                    <div class="in">
                        Travel News
                    </div>
                </a>
            </li>
            <li>
                <a href="" class="item">
                    <div class="icon-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-square" viewBox="0 0 16 16">
                            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                          </svg>
                    </div>
                    <div class="in">
                        How to Book
                    </div>
                </a>
            </li>
            <li>
                <a href="" class="item">
                    <div class="icon-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                        </svg>
                    </div>
                    <div class="in">
                        Push Notification
                    </div>
                </a>
            </li>
        </ul>
        <h5 class="ps-2">Setting and legal</h5>
        <ul class="listview flush transparent no-line image-listview">
            <li>
                <a href="" class="item">
                    <div class="icon-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                            <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
                          </svg>
                    </div>
                    <div class="in">
                        About us
                    </div>
                </a>
            </li>
            <li>
                <a href="" class="item">
                    <div class="icon-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                            <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8Zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022ZM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816ZM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275ZM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z"/>
                          </svg>
                    </div>
                    <div class="in">
                        Our Customer
                    </div>
                </a>
            </li>
            <li>
                <a href="" class="item">
                    <div class="icon-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-hearts" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M11.5 1.246c.832-.855 2.913.642 0 2.566-2.913-1.924-.832-3.421 0-2.566ZM9 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-9 8c0 1 1 1 1 1h10s1 0 1-1-1-4-6-4-6 3-6 4Zm13.5-8.09c1.387-1.425 4.855 1.07 0 4.277-4.854-3.207-1.387-5.702 0-4.276ZM15 2.165c.555-.57 1.942.428 0 1.711-1.942-1.283-.555-2.281 0-1.71Z"/>
                          </svg>
                    </div>
                    <div class="in">
                        Careers
                    </div>
                </a>
            </li>
            <li>
                <a href="" class="item">
                    <div class="icon-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-car-front" viewBox="0 0 16 16">
                            <path d="M4 9a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 8a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H6ZM4.862 4.276 3.906 6.19a.51.51 0 0 0 .497.731c.91-.073 2.35-.17 3.597-.17 1.247 0 2.688.097 3.597.17a.51.51 0 0 0 .497-.731l-.956-1.913A.5.5 0 0 0 10.691 4H5.309a.5.5 0 0 0-.447.276Z"/>
                            <path d="M2.52 3.515A2.5 2.5 0 0 1 4.82 2h6.362c1 0 1.904.596 2.298 1.515l.792 1.848c.075.175.21.319.38.404.5.25.855.715.965 1.262l.335 1.679c.033.161.049.325.049.49v.413c0 .814-.39 1.543-1 1.997V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.338c-1.292.048-2.745.088-4 .088s-2.708-.04-4-.088V13.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1.892c-.61-.454-1-1.183-1-1.997v-.413a2.5 2.5 0 0 1 .049-.49l.335-1.68c.11-.546.465-1.012.964-1.261a.807.807 0 0 0 .381-.404l.792-1.848ZM4.82 3a1.5 1.5 0 0 0-1.379.91l-.792 1.847a1.8 1.8 0 0 1-.853.904.807.807 0 0 0-.43.564L1.03 8.904a1.5 1.5 0 0 0-.03.294v.413c0 .796.62 1.448 1.408 1.484 1.555.07 3.786.155 5.592.155 1.806 0 4.037-.084 5.592-.155A1.479 1.479 0 0 0 15 9.611v-.413c0-.099-.01-.197-.03-.294l-.335-1.68a.807.807 0 0 0-.43-.563 1.807 1.807 0 0 1-.853-.904l-.792-1.848A1.5 1.5 0 0 0 11.18 3H4.82Z"/>
                        </svg>
                    </div>
                    <div class="in">
                        Become a service provider
                    </div>
                </a>
            </li>
            <li>
                <a href="" class="item">
                    <div class="icon-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-percent" viewBox="0 0 16 16">
                            <path d="M13.442 2.558a.625.625 0 0 1 0 .884l-10 10a.625.625 0 1 1-.884-.884l10-10a.625.625 0 0 1 .884 0zM4.5 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm7 6a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                          </svg>
                    </div>
                    <div class="in">
                        Become our affiliate partner
                    </div>
                </a>
            </li>
            <li>
                <a href="" class="item">
                    <div class="icon-box">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sign-do-not-enter" viewBox="0 0 16 16">
                            <path d="M3.584 6V4h.69c.596 0 .886.355.886.998S4.867 6 4.274 6h-.69Zm.653-1.72h-.32v1.44h.32c.396 0 .582-.239.582-.718 0-.481-.188-.722-.582-.722Zm2.729.585v.272c0 .566-.318.903-.83.903-.513 0-.833-.337-.833-.903v-.272c0-.569.32-.904.832-.904.513 0 .83.337.83.904Zm-.337.274v-.277c0-.413-.211-.617-.494-.617-.285 0-.495.204-.495.617v.277c0 .414.21.618.495.618.283 0 .494-.204.494-.618Zm1.358-.579V6h-.319V4h.293l.933 1.436h.015V4h.319v2h-.291L8 4.56h-.013Zm3.142.305v.272c0 .566-.318.903-.83.903-.513 0-.833-.337-.833-.903v-.272c0-.569.32-.904.832-.904.513 0 .83.337.83.904Zm-.337.274v-.277c0-.413-.211-.617-.494-.617-.285 0-.495.204-.495.617v.277c0 .414.21.618.495.618.283 0 .494-.204.494-.618Zm1.236-.854V6h-.333V4.285h-.584V4h1.503v.285h-.586ZM4.496 11.72h.917V12H4.165v-2h1.248v.28h-.917v.57h.862v.268h-.862v.602Zm1.489-1.16V12h-.32v-2h.294l.933 1.436h.014v-1.435h.32V12h-.292l-.936-1.44h-.013Zm2.279-.275V12H7.93v-1.715h-.584V10H8.85v.284h-.586ZM9.3 11.72h.917V12H8.97v-2h1.248v.28H9.3v.57h.863v.268H9.3v.602ZM10.47 10h.765c.42 0 .674.244.674.616a.575.575 0 0 1-.368.56l.404.824h-.373l-.36-.769h-.414V12h-.328v-2Zm.328.273v.694h.381c.245 0 .387-.115.387-.34 0-.228-.147-.354-.378-.354h-.39ZM3.5 7a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-9Z"/>
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16Zm0-1A7 7 0 1 1 8 1a7 7 0 0 1 0 14Z"/>
                          </svg>
                    </div>
                    <div class="in">
                        Privacy & Cookies
                    </div>
                </a>
            </li>
            <li>
                <a href="" class="item">
                    <div class="icon-box">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-signpost-split" viewBox="0 0 16 16">
                            <path d="M7 7V1.414a1 1 0 0 1 2 0V2h5a1 1 0 0 1 .8.4l.975 1.3a.5.5 0 0 1 0 .6L14.8 5.6a1 1 0 0 1-.8.4H9v10H7v-5H2a1 1 0 0 1-.8-.4L.225 9.3a.5.5 0 0 1 0-.6L1.2 7.4A1 1 0 0 1 2 7h5zm1 3V8H2l-.75 1L2 10h6zm0-5h6l.75-1L14 3H8v2z"/>
                          </svg>
                    </div>
                    <div class="in">
                        Terms and conditions
                    </div>
                </a>
            </li>
        </ul>
    </div>
</div>