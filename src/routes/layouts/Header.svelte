<script>
	import { page } from '$app/stores';
    import menuIcon from '$lib/images/menu_fries.svg';
    import messengerIcon from '$lib/images/messenger-logo.svg';
    import userIcon from '$lib/images/user-header.svg';
    import logo from '$lib/images/logo.png';
    
</script>

<header>
	<div class="appHeader bg-primary scrolled">
        <div class="left">
            
            <a href="" class="headerButton" data-bs-toggle="offcanvas" data-bs-target="#sidebarPanel">
                <img src={menuIcon} alt="Ferry Advice Menu" style="width: 17px;" />
            </a>
            <div class="logo">
                <a href="/" aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
                    <img src="{logo}" alt="" height="30px">
                </a>
            </div>
        </div>
        
        <div class="right">
            <a href="" class="headerButton headerChat toggle-searchbox">
                <img src={messengerIcon} alt="" height="40px" id="header_contact">
            </a>
            <a href="" class="headerButton toggle-searchbox">
                <img src={userIcon} alt="" height="35px" id="header_user">
            </a>
        </div>
    </div>
</header>


<style>
	
</style>
