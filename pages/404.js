import Link from "next/link";

function getLost() {
  return (
    <>
      <div className="not-found">
        <p className="number">
          4<span>0</span>4
        </p>
        <p className="text">Sayfa Bulunamadı....</p>
        <Link href="/">
          <a>Anasayfaya Geri Dön</a>
        </Link>
      </div>
    </>
  );
}

export default getLost;
