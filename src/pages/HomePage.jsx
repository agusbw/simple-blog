import { Link } from "react-router-dom";
import React, { useState } from "react";
import useWindowSize, { breakpoint } from "../utils/Responsive";

const date = new Date().toDateString();

const posts = [
  {
    id: 1,
    title: "Rumahku",
    categories: ["#random", "#sweet"],
    created_at: date,
    body: "<p>1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem leo, cursus non malesuada semper, venenatis ut libero. In hac habitasse platea dictumst. Phasellus a volutpat nisi, eu rutrum nisl. Ut malesuada arcu a sollicitudin tempus. Pellentesque suscipit lacinia odio, vitae scelerisque eros ultrices mattis. Pellentesque sagittis lectus lorem, vel elementum nunc volutpat at.</p> <br><br> <p>Vestibulum velit arcu, convallis non interdum a, sodales et ipsum. Aenean maximus vitae lacus ut semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Nunc vitae iaculis massa.Aliquam congue finibus ex vitae condimentum. Nunc sit amet imperdiet felis. Etiam rhoncus porta condimentum. Morbi volutpat urna ac augue venenatis, nec rhoncus mi mattis. Fusce diam ex, luctus non maximus non, feugiat a diam. Duis lacus risus, volutpat at tempus at,</p>",
  },
  {
    id: 2,
    created_at: date,
    title: "Tulisanku 2",
    categories: ["#kuliah", "#umum", "#personal"],
    body: "<p>2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sem leo, cursus non malesuada semper, venenatis ut libero. In hac habitasse platea dictumst. Phasellus a volutpat nisi, eu rutrum nisl. Ut malesuada arcu a sollicitudin tempus. Pellentesque suscipit lacinia odio, vitae scelerisque eros ultrices mattis. Pellentesque sagittis lectus lorem, vel elementum nunc volutpat at.<br><br></p> <p>Vestibulum velit arcu, convallis non interdum a, sodales et ipsum. Aenean maximus vitae lacus ut semper. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse potenti. Nunc vitae iaculis massa.Aliquam congue finibus ex vitae condimentum. Nunc sit amet imperdiet felis. Etiam rhoncus porta condimentum. Morbi volutpat urna ac augue venenatis, nec rhoncus mi mattis. Fusce diam ex, luctus non maximus non, feugiat a diam. Duis lacus risus, volutpat at tempus at,</p>",
  },
  {
    id: 3,
    created_at: date,
    title: "Pengen Kerja",
    categories: ["#keren", "#umum", "#bekerja"],
    body: "<p>Bekerja adalah sebuah perjuangan yang indah. Ia adalah proses kita dalam memperjuangkan kehidupan yang lebih baik, baik itu dalam hal finansial, karir, maupun dalam mencapai tujuan hidup yang lebih besar. Bekerja bukan hanya sekedar memenuhi kebutuhan hidup, tetapi juga memberikan arti pada hidup kita.</p><br><br><p>Bekerja juga merupakan sebuah bentuk tanggung jawab. Tanggung jawab untuk menjalankan tugas yang diberikan dengan sebaik-baiknya, tanggung jawab untuk menghasilkan karya yang bermanfaat, dan tanggung jawab untuk memberikan kontribusi bagi masyarakat. Dalam bekerja, kita belajar untuk bertanggung jawab, berdedikasi, dan menghargai waktu.</p>br><br><p>Namun, bekerja bukanlah semata-mata tentang melakukan pekerjaan secara mekanis. Bekerja juga melibatkan emosi dan perasaan. Ketika kita merasa bangga atas hasil karya yang telah kita hasilkan, ketika kita merasa senang karena telah membantu orang lain, atau ketika kita merasa sedih karena gagal, semua itu merupakan bagian dari pengalaman bekerja.</p>",
  },
];

export default function HomePage() {
  const width = useWindowSize();
  return (
    <div className="container">
      <section>
        <h1>👋Halo! Saya Bewe, </h1>
        <p>
          di tempat ini saya menuangkan pikiran-pikiran random yang saya miliki.
          Selamat datang dan selamat membaca! 💜
        </p>
        <a
          className="primary-link"
          href="https://www.linkedin.com/in/agusbw"
          target="_blank"
        >
          lebih jauh tentangku...
        </a>
      </section>
      <section>
        <h1>📔List tulisan</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link
                className="primary-link"
                to={`/posts/${post.id}`}
                state={{ post }}
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <style jsx>{`
        .container {
          padding: ${width <= breakpoint ? "2.2rem 2rem" : "4.5rem 8rem"};
        }
        h1 {
          font-weight: 600;
          font-size: 25px;
          margin-bottom: 1rem;
        }
        p {
          font-size: 1.1rem;
          line-height: 1.4rem;
          margin-bottom: 1.5rem;
        }
        section {
          margin-bottom: 4rem;
        }
        li {
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
}
