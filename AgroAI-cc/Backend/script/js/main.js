
(function() {
    "use strict";

    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
        let selectEl = select(el, all)
            if (selectEl) {
                if (all) {
                selectEl.forEach(e => e.addEventListener(type, listener))
            } else {
                selectEl.addEventListener(type, listener)
            }
        }
    }

    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
        let position = window.scrollY + 200
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return
            let section = select(navbarlink.hash)
            if (!section) return
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarlink.classList.add('active')
            } else {
                navbarlink.classList.remove('active')
            }
        })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)

    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
        let header = select('#header')
        let offset = header.offsetHeight

        let elementPos = select(el).offsetTop
        window.scrollTo({
            top: elementPos - offset,
            behavior: 'smooth'
        })
    }

    /**
     * Toggle .header-scrolled class to #header when page is scrolled
     */
    let selectHeader = select('#header')
    let selectTopbar = select('#topbar')
    if (selectHeader) {
        const headerScrolled = () => {
            if (window.scrollY > 100) {
                selectHeader.classList.add('header-scrolled')
                if (selectTopbar) {
                    selectTopbar.classList.add('topbar-scrolled')
                }
                } else {
                    selectHeader.classList.remove('header-scrolled')
                if (selectTopbar) {
                    selectTopbar.classList.remove('topbar-scrolled')
                }
            }
        }
        window.addEventListener('load', headerScrolled)
        onscroll(document, headerScrolled)
    }

    /**
     * Mobile nav toggle
     */
    on('click', '.mobile-nav-toggle', function(e) {
        select('#navbar').classList.toggle('navbar-mobile')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
    })

    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function(e) {
        if (select(this.hash)) {
            e.preventDefault()

            let navbar = select('#navbar')
            if (navbar.classList.contains('navbar-mobile')) {
                navbar.classList.remove('navbar-mobile')
                let navbarToggle = select('.mobile-nav-toggle')
                navbarToggle.classList.toggle('bi-list')
                navbarToggle.classList.toggle('bi-x')
            }
            scrollto(this.hash)
        }
    }, true)

    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
        if (window.location.hash) {
            if (select(window.location.hash)) {
            scrollto(window.location.hash)
            }
        }
    });

    /**
     * Initiate glightbox 
     */
    const glightbox = GLightbox({
        selector: '.glightbox'
    });

    /**
     * Back to top button
     */
        let backtotop = select('.back-to-top')
        if (backtotop) {
            const toggleBacktotop = () => {
            if (window.scrollY > 100) {
                backtotop.classList.add('active')
            } else {
                backtotop.classList.remove('active')
            }
        }
        window.addEventListener('load', toggleBacktotop)
        onscroll(document, toggleBacktotop)
        }

    })()


// INI BUAT TANAMAN NYA JANGAN DI HAPUS
const appleHealthSelection = document.getElementById('apple-health-selection');
const cornHealthSelection = document.getElementById('corn-health-selection');
const grapeHealthSelection = document.getElementById('grape-health-selection');

const beforeChooseDisplay = document.getElementById('before-choose-display');
const appleHealthDisplay = document.getElementById('apple-health-display');
const cornHealthDisplay = document.getElementById('corn-health-display');
const grapeHealthDisplay = document.getElementById('grape-health-display');

const uploadAppleImage = document.getElementById('upload-apple-image');
const uploadCornImage = document.getElementById('upload-corn-image');
const uploadGrapeImage = document.getElementById('upload-grape-image');
const selectedAppleImage = document.getElementById('selected-apple-image');
const selectedCornImage = document.getElementById('selected-corn-image');
const selectedGrapeImage = document.getElementById('selected-grape-image');
const appleHealthImageDetection = document.getElementById('apple-health-image-detection');
const cornHealthImageDetection = document.getElementById('corn-health-image-detection');
const grapeHealthImageDetection = document.getElementById('grape-health-image-detection');

const appleDetectionResult = document.getElementById('apple-detection-result');
const cornDetectionResult = document.getElementById('corn-detection-result');
const grapeDetectionResult = document.getElementById('grape-detection-result');
const appleImageResult = document.getElementById('apple-image-result');
const cornImageResult = document.getElementById('corn-image-result');
const grapeImageResult = document.getElementById('grape-image-result');
const applePrediction = document.getElementById('apple-prediction');
const cornPrediction = document.getElementById('corn-prediction');
const grapePrediction = document.getElementById('grape-prediction');
const appleDescription = document.getElementById('apple-description');
const cornDescription = document.getElementById('corn-description');
const grapeDescription = document.getElementById('grape-description');

const appleHealthImageDelete = document.getElementById('apple-health-image-delete');
const cornHealthImageDelete = document.getElementById('corn-health-image-delete');
const grapeHealthImageDelete = document.getElementById('grape-health-image-delete');

//Fungsi Pemilihan Model
appleHealthSelection.addEventListener('click', function () {
    appleHealthDisplay.removeAttribute('hidden');
    appleHealthSelection.setAttribute('style', 'background-color: #EE9494;');
    
    beforeChooseDisplay.setAttribute('hidden', true);
    cornHealthDisplay.setAttribute('hidden', true);
    grapeHealthDisplay.setAttribute('hidden', true);
    cornHealthSelection.removeAttribute('style');
    grapeHealthSelection.removeAttribute('style');
});

cornHealthSelection.addEventListener('click', function () {
    cornHealthDisplay.removeAttribute('hidden');
    cornHealthSelection.setAttribute('style', 'background-color: #EBFFAF;');

    beforeChooseDisplay.setAttribute('hidden', true);
    appleHealthDisplay.setAttribute('hidden', true);
    grapeHealthDisplay.setAttribute('hidden', true);
    appleHealthSelection.removeAttribute('style');
    grapeHealthSelection.removeAttribute('style');
});

grapeHealthSelection.addEventListener('click', function () {
    grapeHealthDisplay.removeAttribute('hidden');
    grapeHealthSelection.setAttribute('style', 'background-color: #C3B9EA;');

    beforeChooseDisplay.setAttribute('hidden', true);
    appleHealthDisplay.setAttribute('hidden', true);
    cornHealthDisplay.setAttribute('hidden', true);
    appleHealthSelection.removeAttribute('style');
    cornHealthSelection.removeAttribute('style');
});


//Fungsi Deteksi
appleHealthImageDetection.addEventListener('click', function () {
    const appleImage = selectedAppleImage.getAttribute('src');
    if (appleImage){
        appleDetectionResult.removeAttribute('hidden');
        appleImageResult.setAttribute('src', appleImage);

        cornDetectionResult.setAttribute('hidden', true);
        grapeDetectionResult.setAttribute('hidden', true);

        let message = {image: base64Image}
            $.post("http://127.0.0.1:5000/applepredict", JSON.stringify(message), function(response){
                applePrediction.innerText = response.prediction;
                
                if (applePrediction.innerText == 'Apel Sehat'){
                    appleDescription.innerHTML = 
                    `Tanaman apel dapat tumbuh dan berbuah baik pada ketinggian (700-1200 m) dan dengan ketinggian optimal (1000-1.200 m). Tanaman Apel yang sehat dapat kita lihat dari daun maupun buahnya sebagai indikator. Pada daun apel yang sehat akan berwarna hijau dan tidak terdapat bercak- bercak penyakit. Begitu juga dengan buahnya, buah apel memiliki permukaan luar yang mulus tanpa bercak-bercak.<br><br>
                    <h5>Cara merawatnya agar tanaman apel tetap sehat:</h5>
                    Membuat pestisida alami untuk menghindarkan tanaman dari serangan hama dan penyakit. Dan juga berikan pupuk agar tanaman tetap sehat serta tidak kekurangan nutrisi.
                    `;
                } else if (applePrediction.innerText == 'Keropeng Apel'){
                    appleDescription.innerHTML = 
                    `Keropeng apel (Apple Scab) merupakan penyakit tanaman apel yang disebabkan oleh jamur Venturia inaequalis yang penyebarannya melalui spora udara. Jamur ini menginfeksi pada daun serta buah. Daun yang terinfeksi memiliki bintik-bintik hijau hingga coklat. Jika sudah terdapat banyak bintiknya maka daun akan menguninng dan cepat rontok.<br><br>
                    <h5>Penanganan untuk keropeng apel (Apple Scab):</h5>
                    Fungsida dapat digunakan untuk mengatasi Apple Scab ini. Penyemprotan dilakukan pada waktu yang tepat agar fungisida mampu mengendalikan penyakit ini.
                    `;
                } else if (applePrediction.innerText == 'Busuk Hitam (Apel)'){
                    appleDescription.innerHTML = 
                    `Busuk hitam pada apel (Apple Black Rot) adalah penyakit pada tanaman apel yang menginfeksi buah, daun dan kulit kayu. Penyakit ini disebabkan oleh jamur Botryosphaeria obtusa. Gejala awalnya berupa bintik-bintik ungu pada permukaan daun. Seiring waktu bintik-bintik akan melebar dan daun yang sudah terinfeksi banyak akan rontok.<br><br>
                    <h5>Penanganan untuk busuk hitam pada apel (Apple Black Rot):</h5>
                    Mengobati Apple Black Rot dapat dimulai dengan melakukan sanitasi. Daun, buah, dan kulit pohon yang jatuh karena terinfeksi jamur segera untuk dijauhkan dari sekitaran pohon.
                    `;
                } else if (applePrediction.innerText == 'Karat Cedar Apel'){
                    appleDescription.innerHTML = 
                    `Karat cedar apel (Cedar Apple Rust) adalah penyakit jamur yang menginfeksi pohon apel serta cedar merah. Spora jamur ini mampu menginfeksi dari satu pohon ke pohon lainnya. Penyakit tanaman ini dapat merusak pohon serta buah apel secara cepat.<br><br>
                    <h5>Penanganan untuk karat cedar apel (Cedar Apple Rust):</h5>
                    Penyakit tanaman ini bisa ditanangani dengan fungisida. Fungisida harus disemprotkan secara berkala agar daun dan buah apel yang masih sehat tidak ikut terkena jamur.
                    `;
                }
                
                console.log(response);
        });
    } else {
        alert ('Masukkan gambar terlebih dahulu!');
    }
});

cornHealthImageDetection.addEventListener('click', function () {
    const cornImage = selectedCornImage.getAttribute('src');
    if (cornImage){
        cornDetectionResult.removeAttribute('hidden');
        cornImageResult.setAttribute('src', cornImage);

        appleDetectionResult.setAttribute('hidden', true);
        grapeDetectionResult.setAttribute('hidden', true);

        let message = {image: base64Image}
            $.post("http://127.0.0.1:5000/cornpredict", JSON.stringify(message), function(response){
                cornPrediction.innerText = response.prediction;
                
                if (cornPrediction.innerText == 'Jagung Sehat'){
                    cornDescription.innerHTML = 
                    `Tanaman jagung yang sehat bisa dilihat dari daun serta batang nya yang mulus, berwarna hijau tanpa bercak-bercak. Tanaman jagung merupakan salah satu jenis tanaman pangan dari keluarga rumput-rumputan yang digolongkan dalam tanaman biji-bijian. Syarat tumbuh tanaman jagung beriklim subtropis atau tropis dan didaerah terletak antara 0-500 LU hingga 0-400 LS. Serta suhu optimimum yang baik adalah 21-34 C.<br><br>
                    <h5>Cara merawatnya agar tanaman jagung tetap sehat:</h5>
                    <ul>
                        <li>
                        <b>Penjarangan dan Penyulaman</b>
                        <p>Proses ini dilakukan pada saat tanam ada dua atau lebih benih jagung yang tertanam, sehingga tumbuh dua atau lebih tanaman jagung.</p>
                        </li>
                        <li>
                        <b>Penyiangan</b>
                        <p>Melakukan proses pembersihan tanaman yang pengganggu di sekitar tanaman jagung, seperti rumput, krokot, keladi dan tanaman pengganggu lainnya.</p>
                        </li>
                        <li>
                        <b>Pembumbunan</b>
                        <p>Pelaksanaannya dapat dilakukan secara bersamaan saat proses penyiangan dengan tujuan memperkuat akar tanaman serta membantu mempercepat pertumbuhan.</p>
                        </li>
                    </ul>`;
                } else if (cornPrediction.innerText == 'Bercak Daun Cercospora'){
                    cornDescription.innerHTML = 
                    `Bercak daun cercospora (Corn Cercospora Leaf Spot Gray) sesuai dengan namanya tanaman jagung yang terinfeksi daunnya terdapat  bercak nekrotik kecil berwarna coklat dan abu-abu yang dikelilingi lingkaran berwarna kuning. Bercak ini dapat menyatu dan merusak seluruh daun. Penyakit ini disebabkan infeksi jamur Cercospora zeae-maydis. Jamur menyelesaikan siklus hidupnya (dari infeksi ke produksi spora baru) dalam 14-21 hari pada varietas yang rentan dan dalam 21-28 hari dalam varietas yang tahan.<br><br>
                    <h5>Penanganan untuk bercak daun cercospora (Corn Cercospora Leaf Spot Gray):</h5>
                    Penyakit ini dapat ditangani dengan fungsida, tetapi harus juga mempertimbangkan kondisi cuaca dan kerentanan tanaman.  Fungisida yang mengandung piraklostrobin dan strobilurin, atau kombinasi azoksistrobin dan propikonazol, protiokonazol dan trifloksistrobin bekerja dengan baik untuk membasmi jamur.
                    `;
                } else if (cornPrediction.innerText == 'Karat Biasa'){
                    cornDescription.innerHTML = 
                    `Karat biasa (Corn Common Rust) adalah penyakit yang disebabkan oleh jamur Puccinia sorghi. Gejala pada penyakit ini berupa flek-flek kecil muncul di kedua sisi daun dan perlahan berkembang menjadi bercak-bercak kecil berwarna kecoklatan. Bercak-bercak yang memanjang ini kemudian berubah menjadi bintil-bintil seperti tepung, berwarna coklat keemasan yang tersebar dalam jarak yang renggang di sisi atas dan bawah. Warnanya bisa berubah menjadi hitam saat tanaman matang.<br><br>
                    <h5>Penanganan untuk karat biasa (Corn Common Rust):</h5>
                    Penanganannya berupa penyemprotan fungisida. Penyemprotan disarankan pada varietas yang rentan. Jika telah muncul bintil-bintil pada daun, dapat langsung segera disemprotkan fungisida ini. Ulangi penyemprotan selama 10 hari.
                    `;
                } else if (cornPrediction.innerText == 'Hawar Daun Jagung Utara'){
                    cornDescription.innerHTML = 
                    `Hawar daun jagung utara (Corn Northen leaf Blight) adalah penyakit tanaman jagung yang sebabkan oleh infeksi jamur. Jamur dibawa oleh angin atau cipratan air hujan. Daun yang paling bawah adalah daun yang paling mudah terkena infeksi ini. Gejalanya berupa bercak-bercak kecil hingga lonjong. Bercak yang sudah tua akan perlahan melebar dan menyatu dengan bercak lain.<br><br>
                    <h5>Penanganan untuk hawar daun jagung utara (Corn Northen leaf Blight):</h5>
                    Penanganan dapat menggunakan fungisida alami dan kimawi. Untuk yang fungisida alami bisa menggunakan Trichoderma harzianum atau Bacillus subtilis. Untuk fungisida kimia bisa menggunakan azoksistrobin, pikoksistrobin, mankozeb, piraklostrobin, propikonazol, tetrakonazol. Berikan produk berbasis pikoksistrobin + siprokonazol, piraklostrobin + metkonazol, propikonazol + azoksistrobin, protiokonazol + trifloksistrobin.
                    `;
                }

                console.log(response);
        });
    } else {
        alert ('Masukkan gambar terlebih dahulu!');
    }
});

grapeHealthImageDetection.addEventListener('click', function () {
    const grapeImage = selectedGrapeImage.getAttribute('src');
    if (grapeImage){
        grapeDetectionResult.removeAttribute('hidden');
        grapeImageResult.setAttribute('src', grapeImage);

        appleDetectionResult.setAttribute('hidden', true);
        cornDetectionResult.setAttribute('hidden', true);

        let message = {image: base64Image}
            $.post("http://127.0.0.1:5000/grapepredict", JSON.stringify(message), function(response){
                grapePrediction.innerText = response.prediction;
                
                if (grapePrediction.innerText == 'Anggur Sehat'){
                    grapeDescription.innerHTML = 
                    `Tanaman anggur yang sehat dapat dilihat dari  daunnya yang hijau tanpa bercak-bercak dan buahnya yang mulus tanpa bercak. Tanaman anggur merupakan tanaman merambat yang termasuk dalam keluarga Vitaeae.  Buah anggur mengandung banyak senyawa polifenol dan resveratol yang berperan aktif dalam berbagai metabolisme tubuh, serta mampu mencegah terbentuknya sel kanker dan berbagai penyakit lainnya.<br><br>
                    <h5>Cara merawatnya agar tanaman anggur tetap sehat:</h5>
                    <ul>
                        <li>Melakukan penyiraman 3 kali seminggu.</li>
                        <li>Memastikan tanaman terkena sinar matahari.</li>
                        <li>Memberi pupuk yang tepat.</li>
                        <li>Mengecek kondisi tanah.</li>
                    </ul>`;
                } else if (grapePrediction.innerText == 'Busuk Hitam (Anggur)'){
                    grapeDescription.innerHTML = 
                    `Busuk hitam pada anggur (Grape Black Rot) adalah penyakit yang gejalanya terdapat bintik-bintik yang tidak beraturan pada daun, di tepian bercak tersebut dikelilingi oleh garis gelap. Batang dan tangkai daun juga bisa terdapatbintik-bintik. Penyebabnya adalah jamur Phyllosticta ampelicida. Penyebaran spora jamur pada saat hujan ringan dan disebarkan melalui angin. Jamur ini akan banyak saat cuaca lembab.<br><br>
                    <h5>Penanganan untuk busuk hitam pada anggur (Grape Black Rot):</h5>
                    Penangan menggunakan zat kimia dengan menyemprotkan kaptan + mankozeb + mikobutanil. Penyemprotan ini dilakukan kira-kira 2 minggu sebelum mekar.
                    `;
                } else if (grapePrediction.innerText == 'Campak Hitam'){
                    grapeDescription.innerHTML = 
                    `Campak hitam (Black Measles) adalah penyakit tanaman yang disebabkan oleh jamur Togninia minima. Jamur akan bertahan hidup pada saat musim dingin. Gejala penyakit ini yakni terdapat garis 'interveinal' pada daun, gejalanya juga ditandai perubahan warna dan terjadi pengeringan jaringan di sekitar saraf utama daun. Daun yang terinfeksi bisa mengering serta rontok.<br><br>
                    <h5>Penanganan untuk campak hitam (Black Measles):</h5>
                    Buang dan musnahkan sisa-sisa tanaman yang terinfeksi jamur dari sekitar tanaman.
                    `;
                } else if (grapePrediction.innerText == 'Bercak Daun Isariopsis'){
                    grapeDescription.innerHTML = 
                    `Gejala pada penyakit bercak daun isariopsis (Isariopsis Leaf Spot) adalah terdapat bercak-bercak yang bentuknya tidak beraturan (diameter 2 -25 mm).  Awalnya lesi berwarna merah kusam hingga coklat kemudian berubah menjadi hitam. Penyakit tanaman ini disebabkan infeksi jamur.<br><br>
                    <h5>Penanganan untuk bercak daun isariopsis (Isariopsis Leaf Spot):</h5>
                    Penanganan dapat dilakukan dengan cara menyemprotkan fungisida pada tanaman yang terinfeksi jamur ini.
                    `;
                }

                console.log(response);
        });
    } else {
        alert ('Masukkan gambar terlebih dahulu!');
    }
});

//Fungsi Hapus
appleHealthImageDelete.addEventListener('click', function () {
    selectedAppleImage.removeAttribute('src');
});

cornHealthImageDelete.addEventListener('click', function () {
    selectedCornImage.removeAttribute('src');
});

grapeHealthImageDelete.addEventListener('click', function () {
    selectedGrapeImage.removeAttribute('src');
});