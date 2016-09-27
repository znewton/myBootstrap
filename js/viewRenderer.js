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
                icon: 'pencil'
            }
        ]
    },

    renderNav: function() {
        var html = '<div id="menu">';
        html += '<div class="navbar-left">';
        html += '<a href="' + Nav.Config.brand.href + '"><i class="fa fa-' + Nav.Config.brand.icon + '" aria-hidden="true"></i>' + Nav.Config.brand.name + '</a>';
        for (var l = 0; l < Nav.Config.left_links.length; l++) {
            html += '<a href="' + Nav.Config.left_links[l].href + '">';
            html += '<i class="fa fa-' + Nav.Config.left_links[l].icon + '" aria-hidden="true"></i>';
            html += Nav.Config.left_links[l].label;
            html += '</a>'
        }
        html += '</div>';
        html += '<div class="navbar-right">';
        for (var r = 0; r < Nav.Config.right_links.length; r++) {
            html += '<a href="' + Nav.Config.right_links[r].href + '">';
            html += '<i class="fa fa-' + Nav.Config.right_links[r].icon + '" aria-hidden="true"></i>';
            html += Nav.Config.right_links[r].label;
            html += '</a>'
        }
        html += '</div>';
        html += '</div>';

        html += '<div id="bar">';
        html += '<div id="ham-menu"></div>';
        html += '<div id="page-title">'+'title'+'</div>';
        html += '<div>';

        return html;
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