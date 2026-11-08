/*هذا الملف رح يكون الهيكل الأساسي للموقع، ونجمع فيه لاحقاً الـ Navbar والـ Footer ومحتوى الصفحات.
وظيفته: هذا هو الغلاف الرئيسي للموقع، وأي صفحة نعرضها داخله رح تكون ضمن نفس الهيكل العام.*/


import Navbar from "../components/Navbar";

function MainLayout({ children }) {
  return (
    <div className="app-layout">
      <Navbar />

      <main className="main-content">
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
