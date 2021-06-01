# ReactJS-Hooks, Redux, Firebase

Bu repository üzerinde ReactJS ile yapmış olduğum çalışmalarıma ait dosyalara yer veriyorum.

## Bölüm Başlıkları

- React Basics
- React Components
- Webpack
- Styling React
- Project:Github Finder
- React Router
- React Hooks & Context
- Github Finder:Context & Publish
- Project:BlogApp
- Redux
- React Redux
- Firebase
- BlogApp:Firebase
- Firebase Authentication

## Github Finder (Hosting:Netlify)
Github API kullanarak kullanıcı profillerini kullanıcı adına göre arayan ve repo bilgilerini listeleyen react uygulamama netlify üzerinden erişebilirsiniz. 

NOT: Özel bir token ile erişim yapılmadığı için Github API isteklerde sınırlama getirebilir.

https://github-finder-mertozen.netlify.app/

### Kişisel Bilgisayarınızda Çalıştırma
1. Bilgisayarınızda NodeJS kurulu olmalıdır. Benim bilgisayarımda `NodeJS v14.15.3` aynı zamanda `NPM 6.14.9` versiyonu yüklüdür.
2. 8-Github Finder-Context and Publish altındaki 54.ders klasörünü indirin.
3. Visual Studio Code üzerinde klasörü açın.
4. `npm install` komutunu VS Code ile ana dizinde terminal açarak çalıştırın.
5. `package.json` içerisinde bulunan `npm start` komutunu terminalde çalıştırarak `webpack-dev-server` üzerinde uygulamayı çalıştırabilirsiniz.

`NOT:` Eğer uygulamayı `production` için hazırlamak isterseniz. `Package.json` üzerinde bulunan `webpack-build` scriptini çalıştırabilirsiniz. Çalıştırma için `npm run webpack-build` demeniz yeterli olacaktır. Uygulama dist klasörü altına çıkartılacaktır.   

`NOT:` Production için hazırladığınız projeyi herhangi bir statik uygulama yayınlayabileceğiniz hosting firması kullanarak yayınlayabilirsiniz. Bunun için `dist` klasörü altındaki bundle.js, index.html ve gif dosyalarını göndermeniz yeterli olacaktır. Ben uygulamayı `Netlify` üzerinde yayınlamayı tercih ettim.

![Screenshot](0-Content/GithubFinder1.PNG)

![Screenshot](0-Content/GithubFinder2.PNG)

## React & Firebase Blog App
React ve Firebase kullanarak gerçekleştirdiğim basit blog uygulamasını kendi yerel bilgisayarınızda çalıştırmak için `15-Blog_App_Final` klasörünü indirip aşağıdaki adımları takip edebilirsiniz.

1. Bilgisayarınızda NodeJS kurulu olmalıdır. Benim bilgisayarımda `NodeJS v14.15.3` aynı zamanda `NPM 6.14.9` versiyonu yüklüdür.
2. Uygulamayı oluştururken `create-react-app@4.0.3` paketini kullandım. Bu nedenle npm scriptlerini çalıştırabilmek ve build işleminden geçirebilmek için öncelikle bu paketi `global` olarak bilgisayarınıza `npm i create-react-app@4.0.3` şeklinde paketi kurmalısınız.
3. Klasörü `VS Code` üzerinde açtıktan sonra yine `VS Code` üzerinde ana dizinde terminal penceresini açın. Terminal penceresinde bağımlılıkları yüklemek için `npm install` komutunu kullanın.
4. Uygulama hem veri saklama hem kullanıcı yönetimini `Firebase` ile gerçekleştirmektedir. Firebase üzerinde bir hesap oluşturun. Daha sonra bir veritabanı oluşturma ve authentication yönetim işlemi gerçekleştirmeniz gerekecektir. Buradaki işlemleri aşağıdan takip edebilirsiniz.

![Screenshot](0-Content/Firebase1.PNG)
![Screenshot](0-Content/Firebase2.PNG)
![Screenshot](0-Content/Firebase3.PNG)
![Screenshot](0-Content/Firebase4.PNG)
![Screenshot](0-Content/Firebase5.PNG)
![Screenshot](0-Content/Firebase6.PNG)
![Screenshot](0-Content/Firebase7.PNG)
![Screenshot](0-Content/Firebase8.PNG)
![Screenshot](0-Content/Firebase9.PNG)
![Screenshot](0-Content/Firebase10.PNG)
![Screenshot](0-Content/Firebase11.PNG)
![Screenshot](0-Content/Firebase12.PNG)
![Screenshot](0-Content/Firebase13.PNG)
![Screenshot](0-Content/Firebase14.PNG)
![Screenshot](0-Content/Firebase15.PNG)
![Screenshot](0-Content/Firebase16.PNG)

5. Yukarıdaki tüm adımları takip ettiğiniz zaman hem authentication işlemlerini hemde veritabanı oluşturma işlemini tamamlamış olacaksınız. Bu işlemleri tamamlamadan uygulamayı çalışır hale getiremezsiniz.
6. 8.Ekran görüntüsünde size ait olan özel erişim bilgilerinizi projede `src/firebase/firebaseConfig.js` dosyasına ekleyin.
7. Şimdi terminal penceresinde yine ana dizindeyken `npm run start` komutunu çalıştırın.
8. Uygulama çalıştırıldıktan sonra varsayılan tarayıcınızda giriş sayfası görüntülenecektir.

![Screenshot](0-Content/BlogApp1.PNG)

9. Google hesabınızla giriş yaptıktan sonra aşağıdaki sayfa ile karşılacaksınız.

![Screenshot](0-Content/BlogApp2.PNG)

10. Blog oluşturma işlemi için `Create` menüsüne tıklayın. Tıkladıktan sonra bir blog oluşturun.

![Screenshot](0-Content/BlogApp3.PNG)

11. Blog oluşturulduktan sonra otomatik olarak blogların listelendiği sayfaya yönlendirileceksiniz. Buradan blog detaylarına gidebilir veya blog için düzenleme işlemlerini gerçekleştirebilirsiniz.

![Screenshot](0-Content/BlogApp4.PNG)
![Screenshot](0-Content/BlogApp5.PNG)
![Screenshot](0-Content/BlogApp6.PNG)

12. Blog silme işlemini yine düzenle dedikten sonra gerçekleştirebilirsiniz.

13. Buradaki bilgiler `Firebase` üzerinde oturum açmış kullanıcı bilgileri ile eşleştirildiği için her kullanıcının blog yazıları kendine özgü olarak eşleştirilmektedir. Oturumu kapattıktan sonra farklı bir google hesabı ile giriş yaptığınızda daha önce eklemiş olduğunuz blog bilgilerine erişemezsiniz.

14. Bu uygulama sadece işin yönetici kısmına kapsamaktadır. Yani diğer rol olan ziyaretçilere yönelik bir arayüz bulunmamaktadır. Bu kısım bu repoyu indirecek olanlara bırakılmıştır. Buradaki amaç kendinizi geliştirmeniz ve çalışma mantığını çözmeniz üzere kurgulanmıştır.

`NOT:` Blog yazısı eklerken `HMTL` ögelerine yer verebilirsiniz ayrıca `Bootstrap v4.5` kullanıldığı için bootstrap sınıflarından da yararlanabilirsiniz. Blog yazıları yorumlanırken `HTML` olarak yorumlanmaktadır. Aşağıda bootstrap tablolarına ait bir örnek blog yazısı olarak eklenmiştir. Blog detay butonuna tıkladığımızda karşımıza çıkan yapı yorumlanmış bir yapıdır.

![Screenshot](0-Content/BlogApp7.PNG)
![Screenshot](0-Content/BlogApp8.PNG)
![Screenshot](0-Content/BlogApp9.PNG)

`NOT:` Uygulama üzerinde olmayan sayfalar için `Sayfa Bulunamadı` yapısıda oluşturulmuştur. Tarayıcının adres çubuğuna olmayan bir değer yazıp enter tuşuna bastığınızda aşağıdaki sayfa karşınıza gelecektir.

![Screenshot](0-Content/BlogApp10.PNG)

`NOT:` Uygulamayı derlemek için `npm run build` komutunu kullanabilirsiniz.

> Bu repo ile hem bilgilerimi tazelemek hem de yeni şeyler öğrenirken dokümantasyon oluşturmak istedim. Daha fazlası için her konunun özeline inmek gerekmektedir. Ancak bir uygulamayı çalışır hale getirdikten sonra değişiklikler yaparak sonuca hızlıca erişebileceğinizi düşünüyorum. Tabi kullanılan paketleride `package.json` üzerinden isimlerini alarak ne için kullanıldığını araştırırsanız çok daha faydalı olacaktır.

