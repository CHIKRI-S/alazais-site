export default function Home() {
  return (
    <main style={{minHeight:"100vh",display:"grid",placeItems:"center",padding:"2rem"}}>
      <section style={{textAlign:"center",maxWidth:720}}>
        <h1 style={{fontSize:"40px",fontWeight:600,letterSpacing:"-0.02em"}}>ALAZAÏS</h1>
        <p style={{opacity:.8,marginTop:12}}>
          Portails. Quanticités. Rédemption. — Site officiel en chantier.
        </p>
        <a href="mailto:contact@alazais.com" style={{display:"inline-block",marginTop:20,padding:"10px 16px",border:"1px solid",borderRadius:12}}>
          Me contacter
        </a>
      </section>
    </main>
  );
}
