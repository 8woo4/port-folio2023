// page.js
'use client'

import { useState } from 'react'
import './globals.css'
import { useRouter } from 'next/navigation'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import Image from 'next/image'

export default function Home() {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1))
  }

  return (
    <div>
      <main
        className="flex min-h-screen items-center justify-center p-24"
        style={{ backgroundColor: '#8181F7' }}
      >
        <div className="option">
          <div className="macWindow">
            <header>
              <div className="dots">
                <span className="dot red"></span>
                <span className="dot yellow"></span>
                <span className="dot green"></span>
              </div>
            </header>
          </div>
          <h1>김시우의</h1>
          <h6>웹포트폴리오</h6>
          <hr />
          <div className="section-wrapper">
            <section className="about-me-section">
              <h2>About Me</h2>
              <p>
                안녕하세요. 저는 중부대학교에서 정보보호학을 전공 중인
                김시우입니다.
              </p>
              <p>현재 next.js, HTML, CSS, JavaScript 를 배우고 있습니다.</p>
              <hr />
            </section>
          </div>
          <div className="section-wrapper">
            <section className="projects-section">
              <h2>Projects</h2>
              <div className="page-wrapper">
                {/* 현재 페이지의 프로젝트 항목들만 보이도록 조절 */}
                <div
                  className="page-item"
                  style={{ display: currentPage === 1 ? 'block' : 'none' }}
                >
                  <strong>
                    <h3>쇼핑몰 사이트 제작(F.N.S):</h3>
                  </strong>
                  <p>스터디에서 제작 중인 쇼핑몰 프로그램.</p>
                  <p>HTML, CSS, JavaScript 등의 기본 언어 사용.</p>
                  <a href="https://github.com/8woo4/Shopping">
                    <h5>GitHub 바로가기</h5>
                  </a>
                  {/* 프로젝트 내용... */}
                </div>
                <div
                  className="page-item"
                  style={{ display: currentPage === 2 ? 'block' : 'none' }}
                >
                  <strong>
                    <h3>Admin page:</h3>
                  </strong>
                  <p>
                    Next.js 기반의 프로그램. 관리자 서버를 활용한 승인 사이트
                  </p>
                  <p>(웹서버보안프로그래밍 팀 과제-제작 예정)</p>
                  <p>-참여팀원-</p>
                  <p>
                    92212958 윤다혜 92212776 김시우 92212879 송지현 92213029
                    이지인 92213158 홍준희
                  </p>
                  <p></p>
                  <a href=""></a>
                </div>
                <div
                  className="page-item"
                  style={{ display: currentPage === 3 ? 'block' : 'none' }}
                >
                  <strong>
                    <h3>cleck2</h3>
                  </strong>
                  <p>Clerk with Next.js</p>
                  <p>
                    <a href="https://github.com/8woo4/cleck2">
                      <h5>GitHub 바로가기</h5>
                    </a>
                    <a href="https://cleck2-w1jt.vercel.app">
                      <h5>Vercel 바로가기</h5>
                    </a>
                  </p>
                  <p></p>
                  <a href=""></a>
                  {/* 프로젝트 내용... */}
                </div>
                <div
                  className="page-item"
                  style={{ display: currentPage === 4 ? 'block' : 'none' }}
                >
                  <strong>
                    <h3>Dapara-shopping</h3>
                  </strong>
                  <p>
                    Uses Next.js, Tailwind CSS, MongoDB, Redux Tookit, React
                    Hook Form
                  </p>
                  <p>
                    <a href="https://github.com/8woo4/Dapara-shopping1">
                      <h5>GitHub 바로가기</h5>
                    </a>
                    <a href="https://dapara-shopping1.vercel.app">
                      <h5>Vercel 바로가기</h5>
                    </a>
                  </p>
                  <p></p>
                  <a href=""></a>
                  {/* 프로젝트 내용... */}
                </div>
                <div
                  className="page-item"
                  style={{ display: currentPage === 5 ? 'block' : 'none' }}
                >
                  <strong>
                    <h3>Crud2</h3>
                  </strong>
                  <p>
                    Uses Next.js, Tailwind CSS, Mongoose, MongoDB CRUD (Create,
                    Read, Update, Delete)
                  </p>
                  <p>
                    <a href="https://github.com/8woo4/crud_2">
                      <h5>GitHub 바로가기</h5>
                    </a>
                    <a href="https://crud2-ashy.vercel.app">
                      <h5>Vercel 바로가기</h5>
                    </a>
                  </p>
                  <p></p>
                  <a href=""></a>
                  {/* 프로젝트 내용... */}
                </div>
                {/* 나머지 프로젝트 항목들 추가 */}
              </div>
              {/* 페이지 네비게이션 화살표 */}
              <div>
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                  ←
                </button>
                <button onClick={handleNextPage}>→</button>
              </div>
              <hr />
            </section>
          </div>
          <div className="section-wrapper">
            <section className="stack-section">
              <h2>Stack</h2>
              <div className="stack-images">
                <Image src="/img/html.png" alt="CSS" width={90} height={90} />
                <Image src="/img/css.png" alt="CSS" width={55} height={55} />
                <Image
                  src="/img/js.png"
                  alt="JavaScript"
                  width={80}
                  height={80}
                />
                {/* 다른 스택 이미지들도 필요에 따라 추가할 수 있습니다. */}
              </div>
            </section>
          </div>

          <section className="contact-section">
            <h2>Contact</h2>
            <p>Email: openup0102@naver.com </p>
            <p>Other Platforms :</p>
            <>
              <a
                className="icon"
                href="https://github.com/8woo4"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub
              </a>
              <a
                className="icon"
                href="https://www.instagram.com/8woo4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram /> Instagram
              </a>
            </>
          </section>
        </div>
      </main>
    </div>
  )
}
