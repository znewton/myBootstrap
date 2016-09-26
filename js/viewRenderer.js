var config = {
    navbar: {
        brand: {
            label: 'myBootstrap',
            href: '/',
            icon: ''
        },
        left_links: [
            {
                label: 'About',
                href: 'about.html',
                icon: ''
            }
        ],
        right_links: [
            {
                label: 'Sign In',
                href: '#',
                icon: ''
            }
        ]
    },
    footer: {

    }
};

function renderNavbar(){
    var html = [];

    return html.join('');
}

function renderFooter(){
    var html = [];

    return html.join('');
}

window.onload = function(){
    document.getElementById('navbar').innerHTML = renderNavbar();
    document.getElementById('footer').innerHTML = renderFooter();
};