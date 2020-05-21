import tinyMCE from 'tinymce';

let isRTL = $('body').hasClass('rtl');

let direction = (isRTL) ? 'rtl' : 'ltr';

tinyMCE.baseURL = `${FleetCart.baseUrl}/modules/admin/js/wysiwyg`;
tinyMCE.init({
    selector: '.wysiwyg',
    theme: 'modern',
    images_upload_url: 'postAcceptor.php',
    automatic_uploads: true,
    mobile: { theme: 'mobile' },
    height: 300,
    branding: false,
    image_advtab: true,
    image_title: true,
    relative_urls: false,
    directionality: direction,
    cache_suffix: `?v=${FleetCart.version}`,
    menubar: false,
    plugins: 'lists, link, table, paste, autosave, autolink, wordcount, code, image, media',
    toolbar: 'styleselect bold italic underline | bullist numlist | alignleft aligncenter alignright | outdent indent | link table code media image',
});
