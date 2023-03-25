export default function Footer() {
  return (
    <div className="footer">
      <p>
        Say Hi!{" "}
        <a
          className="primary-link"
          href="https://twitter.com/agus_bw83"
          target="_blank"
        >
          @agus_bw
        </a>
      </p>

      <style jsx>{`
        .footer {
          width: 100%;
          text-align: center;
          padding: 20px 0;
        }
      `}</style>
    </div>
  );
}
