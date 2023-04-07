import useDocumentTitle from "../utils/useDocumentTitle";
import useWidth, { breakpoint } from "../utils/useWitdh";
import { formatDate } from "../utils/functions";
import {
  useLoaderData,
  Form,
  useNavigation,
  useActionData,
} from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";

export default function GuestbookPage() {
  const actionData = useActionData();
  const navigation = useNavigation();
  const messages = useLoaderData();
  const width = useWidth();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  useDocumentTitle("Guestbook");

  useEffect(() => {
    if (actionData?.isSent) {
      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
    }
  }, [actionData]);

  return (
    <div className="container">
      <h1>👤Guestbook</h1>
      <p>
        Tuliskan saja pesan anda di sini, dapat berupa apa saja baik itu
        harapan, pesan, lelucon, dan lain sebagainya.
      </p>
      <div className="card">
        <div className="card-body">
          {actionData?.isSent && (
            <div
              className={`alert alert-${
                actionData.isSent ? "success" : "danger"
              }`}
            >
              {actionData.message}
            </div>
          )}
          <h3>Tulis Pesanmu!</h3>
          <p>Bagikan pesan anda ke pengunjung lainnya!</p>
          <br />
          <Form method="post" action="/guestbook">
            <div className="form-group">
              <label htmlFor="name">Nama*</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                name="name"
                ref={nameRef}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                ref={emailRef}
              />
            </div>
            <div className="form-group">
              <label htmlFor="pesan">Pesan*</label>
              <textarea
                type="text"
                className="form-control"
                id="pesan"
                required
                name="message"
                ref={messageRef}
              />
            </div>
            <p className="info">
              Informasi yang ditampilkan pada halaman hanya pesan dan nama,
              Email digunakan untuk membalas pesan ada.
            </p>
            <button type="submit" disabled={navigation.state === "submitting"}>
              {navigation.state === "submitting" ? "Loading..." : "Kirim"}
            </button>
            <div className="clear"></div>
          </Form>
        </div>
      </div>
      <section>
        <h3>Pesan</h3>
        {messages &&
          messages.map((message, index) => {
            return (
              <div className="messages card card-body" key={index}>
                <p>{message.message}</p>
                <p className="message-info">
                  {message.name} / {formatDate(message.inserted_at)}
                </p>
              </div>
            );
          })}
      </section>
      <style jsx>{`
        .container {
          width: ${width < breakpoint ? "100%" : "850px"};
          box-sizing: border-box;
          -webkit-box-sizing: border-box;
          -moz-box-sizing: border-box;
        }

        .messages h4,
        p {
          padding: 0;
          margin: 0;
        }

        .message-info {
          margin-top: 0.5rem;
          font-size: 0.8rem;
        }

        .form-group {
          margin-bottom: 1rem;
        }

        .card {
          margin-top: 1rem;
          background-color: #f3f4f6;
          box-sizing: border-box;
          border-radius: 0.25rem;
          padding: 1rem;
        }

        .clear {
          clear: both;
        }

        .info {
          font-size: 0.8rem;
        }

        .card-body {
          color: #2d3142;
          width: 100%;
        }

        input,
        textarea {
          display: block;
          width: 100%;
          box-sizing: border-box;
          margin-top: 0.5rem;
          border-radius: 0.25rem;
          outline: none;
          border: 1px solid #ccc;
          padding: 0.5rem;
          color: #2d3142;
        }

        button {
          padding: 0.5rem 1.2rem;
          border-radius: 0.25rem;
          background-color: #2d3142;
          color: white;
          border: none;
          cursor: pointer;
          float: right;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #2f4858;
        }
      `}</style>
    </div>
  );
}
