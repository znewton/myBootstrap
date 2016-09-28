var Nav = {
    Config: {
        brand: {
            name: 'myBootstrap',
            href: '/',
            icon: 'home'
        },
        left_links: [
            {
                label: 'About',
                href: 'about.html',
                icon: 'question'
            }
        ],
        right_links: [
            {
                label: 'Sign In',
                href: '#',
                icon: 'sign-in'
            }
        ]
    },

    renderNav: function() {
        var html = '<div id="menu" class="show">';
        html += '<div class="navbar-menu-section">';
        html += '<a href="' + Nav.Config.brand.href + '"><i class="fa fa-' + Nav.Config.brand.icon + '" aria-hidden="true"></i>' + Nav.Config.brand.name + '</a>';
        for (var l = 0; l < Nav.Config.left_links.length; l++) {
            html += '<a href="' + Nav.Config.left_links[l].href + '">';
            html += '<i class="fa fa-' + Nav.Config.left_links[l].icon + '" aria-hidden="true"></i>';
            html += Nav.Config.left_links[l].label;
            html += '</a>'
        }
        html += '</div>';
        html += '<div class="navbar-menu-section">';
        for (var r = 0; r < Nav.Config.right_links.length; r++) {
            html += '<a href="' + Nav.Config.right_links[r].href + '">';
            html += '<i class="fa fa-' + Nav.Config.right_links[r].icon + '" aria-hidden="true"></i>';
            html += Nav.Config.right_links[r].label;
            html += '</a>'
        }
        html += '</div>';
        html += '</div>';

        html += '<div id="bar">';
        html += '<div id="ham-menu" class="open" onclick="Nav.hideMenu()"><span></span><span></span><span></span></div>';
        html += '<div id="page-title">'+'Page Title'+'</div>';
        html += '<div>';

        return html;
    },

    showMenu: function() {
        document.getElementById('menu').style.width = '60vw';
        document.getElementById('ham-menu').onclick = function(){Nav.hideMenu()};
        document.getElementById('ham-menu').className = 'open';
    },

    hideMenu: function() {
        document.getElementById('menu').style.width = '0';
        document.getElementById('ham-menu').onclick = function(){Nav.showMenu()};
        document.getElementById('ham-menu').className = '';
    }
};

function renderFooter(){
    var html = [];

    return html.join('');
}

window.onload = function(){
    document.getElementById('nav').innerHTML = Nav.renderNav();
    document.getElementById('footer').innerHTML = renderFooter();
};