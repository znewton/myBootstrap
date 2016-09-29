var Nav = {
    Config: {
        brand: {
            name: 'myBootstrap',
            href: 'index.html',
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
        html += '<div id="ham-menu" onclick="Nav.showMenu()"><div><span></span><span></span><span></span></div></div>';
        html += '<div id="page-title">'+'Page Title'+'</div>';
        html += '<div>';

        return html;
    },

    showMenu: function() {
        document.getElementById('menu').style.width = '60vw';
        document.getElementById('ham-menu').onclick = function(){Nav.hideMenu()};
        document.getElementById('ham-menu').className = 'open';
        document.getElementById('content').style.left = '60vw';
        document.getElementById('content').style.width = '40vw';
    },

    hideMenu: function() {
        document.getElementById('menu').style.width = '0';
        document.getElementById('ham-menu').onclick = function(){Nav.showMenu()};
        document.getElementById('ham-menu').className = '';
        document.getElementById('content').style.left = '0';
        document.getElementById('content').style.width = '100vw';
    }
};

var Foot = {
    Config: {
        contact_info: {
            show: true,
            address: '1234 Street Ave., City, ST',
            phone: '(123)456-789',
            email: 'email@gmail.com'
        },
        links: {
            show: true,
            social: [
                {
                    label: 'Facebook',
                    href: 'http://www.facebook.com',
                    icon: 'facebook'
                },
                {
                    label: 'GitHub',
                    href: 'http://www.github.com',
                    icon: 'github'
                }
            ]
        }
    },

    renderFoot: function() {
        var html = '';
        if (Foot.Config.contact_info.show){
            html += '<div class="section">';
            html += '<div id="address">' +
                '<a href="http://maps.google.com/?q='+encodeURIComponent(Foot.Config.contact_info.address).replace('_','+')+'">' +
                '<i class="fa fa-map-marker"></i>' +
                Foot.Config.contact_info.address +
                '</a></div>';
            html += '</div>';
        }

        return html;
    }
};

window.onload = function(){
    document.getElementById('nav').innerHTML = Nav.renderNav();
    document.getElementById('foot').innerHTML = Foot.renderFoot();
};