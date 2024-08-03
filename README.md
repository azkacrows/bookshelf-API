# Bookshelf API

## Deskripsi Proyek

Proyek ini merupakan latihan mandiri dalam membangun sebuah RESTful API untuk mengelola data buku. API ini dibuat menggunakan Hapi.js sebagai framework utama dan Nanoid untuk menghasilkan ID unik. Tujuan dari proyek ini adalah untuk mempraktikkan konsep-konsep dasar dalam pengembangan backend dengan Node.js.

## Struktur Proyek

-   `src/`
    -   `books.js`
    -   `handler.js`
    -   `routes.js`
    -   `server.js`

### Penjelasan Folder dan File

#### `src/`

Folder `src` berisi semua file source code utama dari aplikasi Bookshelf API.

-   `books.js`: Berisi data buku yang disimpan dalam bentuk array objek.
-   `handler.js`: Berisi fungsi-fungsi handler yang digunakan untuk menangani berbagai request HTTP yang masuk ke server.
-   `routes.js`: Berisi definisi rute API yang menghubungkan endpoint dengan handler yang sesuai.
-   `server.js`: Berisi konfigurasi dan inisialisasi server Hapi.js, termasuk pengaturan plugin dan middleware.

## Fitur Utama

1. **CRUD Buku**: API untuk membuat, membaca, memperbarui, dan menghapus data buku.
2. **Validasi Input**: Validasi data input untuk memastikan integritas data yang disimpan.
3. **Penggunaan Nanoid**: Menggunakan Nanoid untuk menghasilkan ID buku yang unik.
4. **Penggunaan Hapi.js**: Memanfaatkan framework Hapi.js untuk membangun server yang modular dan fleksibel.

## Cara Menggunakan

1. **Clone Repository**:

    ```sh
    git clone https://github.com/azkacrows/bookshelf-api.git
    ```

2. **Install Dependencies**:

    Pindah ke direktori proyek dan install dependencies yang diperlukan dengan perintah berikut:

    ```sh
    cd bookshelf-api
    npm install
    ```

3. **Jalankan Server**:

    Jalankan server dengan perintah berikut:

    ```sh
    npm start
    ```

4. **Gunakan API**:

    Gunakan aplikasi seperti Postman atau curl untuk mengakses endpoint API yang tersedia.

## Sumber Asli

Proyek ini dibuat sebagai bagian dari latihan mandiri dalam mempelajari pengembangan aplikasi backend dengan Node.js dan Hapi.js.

**Date**: Feb 20, 2023
