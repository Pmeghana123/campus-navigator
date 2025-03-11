
import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us">
      {/* About Us Section */}
      <div className="about-container">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Navigate your college campus with ease using <strong>Campus Navigator</strong>, 
            designed for seamless location tracking and quick access to essential facilities. 
            Find classrooms, labs, and faculty details effortlessly, all in one intuitive platform.
          </p>
        </div>
        <div className="about-image">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLiRLOYimEg7cPkArywB10sA68OkygYqpz2w&s"
            alt="Campus Navigator"
          />
        </div>
      </div>

      {/* Mission Section */}
      <div className="mission-container">
        <div className="mission-image">
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASEhAQEBEVFRUXFRUWFRcVFRcYFxUWGBgWFhYXFxUYHiggJBolGxgWITIhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lICYrLS8tLS8tLS0vLy0tLS0tLS0tLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBEQACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAAAQUGAwQHAgj/xABHEAABAwEFBAYFCAgFBQEAAAABAAIDEQQFEiExBkFRYRMicYGRsQcyocHRFEJSYnKS4fAWIzNTVJOz0jSCorLxFTVEdMJD/8QAGwEAAgMBAQEAAAAAAAAAAAAAAAEDBAUGAgf/xAA8EQACAQMCAwQIBAUDBQEAAAAAAQIDBBEFEiExQRNRYXEGFCIygZGhsVLB0fAVMzRC4RYjU0NicpLxJP/aAAwDAQACEQMRAD8A7EpyuNAwQA0gBAwQA0CBADQMEACABAAgASAaABAAgAQAIAEACAEgATAEACABAAgQkACAEgYIEJMAQAIASBDQMEANAAkAIGNAgQA0DBAAgAQAJANAAgAQMEBgEBgEBgwvtUYyLh7T5L2qcnyR4c4rqe45WuzaQV5aa5jTT5HtIYIAEAJMAQAIAEACBCQAkDBAAmISABAAgAQAIAaQAgY0CBADQMEACABADSAEACB4Iy1Xw1krWEHDmHHCa13UGpHxWHW1mELpUsPHXg+fgaFKxlOk5549CTC208rJQ5DomBiknY3IlelFvkjy5xXM1LdaxhAYddexS0qbzxIatThwItzlaSKrFFOWEOb/AM8kSgpLDCM3F5RY2OqARvAPis5rDwaKeVkaAwCABAhJgCABAAgBIECAEgYIECAEmAIAEANAAkAIAaAGgaMc8zWDE45efYq1zdU7aG+o+BJTpyqS2xIyS9nfNaAOeZXMVvSOq3/txSXiaUNPil7TPMd90PXblxb8Cnb+kst2K0eHehz03K9hkvDI1wDmmoOhXVUq0K0FODymZc4ShLbLme1IeCv31aHCQ4XEUAGRI3V3dq4XWryrG8ahJrGOTN2xoxdJZXMwWW/5GGknXb/qHfv71NY67Wg1Gr7S+v8AkkrabTmsw4P6E/AYpcE7CHZENcOeveNOWa6x28JVI1WvaS4Z8TDVVqLhF8M/YyWicMAJzqrUYuTIZz2mtLbhhNAQVIqLzxI5VsrgRznKykVmzE5y9JHnJjcV6PLZjc5ejy2enWySgGNwAFAAaadi8KlDuPXay7yZuW0uex2I1LTSvHtVOvBRlwLlvNyjxMtttbmGMNjLsTqGlOByFTrvz3ArKurudGpCMYNpvmaFGjGpGTcsYNtXis0CYjHJK1upXpRb5CckuYo5mu0KHFrmJTT5GRI9AgBIECAEgYIEJMAQAIAaQAEDGgQIAaBkHekxc8jc3Ie/88lwet3Lq3Lj0jwX5m3ZU1Cmn1ZHSyLElIvxiakkiIonjEktmLYekdEdHAkcnD4jyC6f0euJRqOi+TWfiZ2q0E6aqLmizrrzBKttNM2N5LzSoBA3nKmQ7lyV5o11e6g40Y5Tw89F8TRhqNC1t1Kq/h1ZRbffEkshgghllcBVzIWF5a3i8jT8V2ml6DZaXidX2p975LyRzl5qN5qS20/Yh3dX5sk9htoxFIWPJbG52F7XChikGVXA6cD+C2r+3Ven2kOa+qMuxqzs6vZVPdf3OnTQhwoVz8ZNcUdJKKkuJgN3s4u8R8F77aRH2MTybtZxd4j4J9vIOwieTdUfF3iPgn6xMXq8RG6I+LvEfBHrExerxPJuaPi7xHwT9ZmHq0Bf9Ei4v8R8EeszF6rA3bNZ2xtwtFB5niVFKTk8snhBQWEZV4wehJgeXSAAnWgJTSPLaIh7yczqriWFgpt5eTEX716xk85N4XoygqDWmdKaqv2EuhP26xxNqz2hrxVp7eI7lFKLi8MljNS5GUpHpiQISABAAgBJgNAAkAIGNAhoGgQBWr1q2R44mvcc1851enKndzT6vPzOis2pUosjJZFnJF+MTUkkUyRPGJJbKxF0+Lc1pJ7+qPM+C3dCpOVzu6JGfq01Ght72XNdmcyV3bS6TNEJWCr46mm9zPnDtGvceKv6dcdlU2y5P7mXqlq6tPfHnH7FF2L2miu6W1i0RPLJnNkbLG3EQQKFjhrTh2lWtQs6lSeYnjTb2kqSi3hojLxt3ym02q1iMxtlc3C12TqNaG4nDiaV/NVo2VGVKkoszNTuIVanslpu70iR2aGNlqjleR1Q+MNPVHq4sTga7u5Zd5p7U3KHJmlp9+pQ2T5r7Exd/pKuuUhpmdET+9YWjveKtHeVnytqkehpxrQlyZbIJWPaHscHNIqHNILSOIIyKgJTIgDGJW4iyoxAVpvoolXpup2afHuPfZy27scD3RSng1ZLyga7A6aJrvomRoPgTVPDDJigvmyvmNmjnjdKGYyxrg4htQKmnMjLmjDxkDeQBitQOB1PzxXqGN3E8VM7eBEkq2UzE5y9ITMTnL2jyYnOTPDHZ7U6N2JvCmeiU4Kawxxm4PKJC7LfI9+F1CKGuVKKvWpRjHKLFKrOUsMllWLIIASBggQIGCBAgY0CBADQMEAaN63eJRkaOGh3HkVk6ppkbyOVwkuT/Iu2l26EuPIgIrrNT0uVDSgI9pCoad6N5W65+S/Us3es7fZofNnm0XXGR1atPbUe1adf0btpx/2sxfnkq0ddrwl7eGvkWG5LCyKMYDUuzc7ifgOCksrGNnDYufViubt3Mt/ToiQV0rAkBy/ba6RZ5wWUDJaua2ubSCMYpwqR40XS6bc9rT2y5r7HKanZ9jU3x5P7lEvq8JI3tazIEVrQGpqcs/zmrVSpJSwhWlvTnBylxZIQ2V9oDYwwuc8DqtFTXkOS9VJRUMzeEQ04yVXFPjxK3e93S2aaSCYUew0cKg6gEZjLQhZKkpLK5G5hp4ZI7IbWT3fK1zHF0Jd+tir1XDeWg6P4EU0zyVetSU/MsUqji/A+irFa45o45onBzHtDmOGhaRUFZjWOBfyeBYY+k6XCMVPA51I5niqcbKjGs6yXtMmdxN0+zzwOaelzayaN4sNneWDAHTOaaOOL1Yw4ZgUzNNagaVB2rSipLfL4Gbc1XF7UctsF1zWhzmQQukIBc4NFaDWpP5J3VU9atCkszeCKlTnUfsrJdvRJs1axbo7U+GSKKJslS9pZjLmFgYA6hObsXAYeNFVr1IuOE8lilCSeWdtc4DUgdpVVE7aRgfboW6ysHa9vxXpU5vozw6tNc5Ixy3pC3V3gCfcvcaFR8keJV6a6mhaNpIW6Mee4D3qeFjUl1RXnfU49GRF47eRQt6SWPC3FhGZc5x1NGgbhvUkrHbzkR0711HwiWa7LcyeKOaMgteAQRwKpTg4S2svQkpLJtLyewQAIExFACQMECBAAgACBjCBDQAnvAzJohJvkDaXMwT2kAVaQSvcYNvieJVElwNJ1pfriP55KdU49xBvl3mrI9SpHhswucvaR4bNmy3n0bcOGuZOZUM6G+WckkK+yOMEpd9tEoJpQjUeRVarTdN4LVKrvRtqIlOF+k6+nOvN+E9WBrYgNxyD5Pa4j/KFrWWacFJdTMvYqq9jN+5rnNojFpe9sVn16V+/cQxurnVqKcj2LSq3sViMFuk+n6mPSsZ8XN7Yrr+hs2u/2RNdDd7DG05Pmd+2k/wAw9Uch7F4haSqPfcPL6Lov1JJ3cacdlusLq+rNDZfZ+zW61CO046YHOGF2EuIIyJpWmZOS8almFNSj34JtMe6o4y8yW2o9EbcJku+R2IZ9FKQQ7kySmR5OqDxCx4XT/uNqVuv7TX9Ee0j4Jn3Vag5lXO6IPyMcmr4iDpizcOdfpBK4hlb4joyx7LOv0VUnwce2q2e6e+3MkcGseyOYYhXGxgYxzBmMyWuHIVKtTuextHKKy+Xz6leNDtLhJ8i82ezxQt6OGNkbfosaGivGg381ydWtOo8zeWdDTpRisRRkst0mWNw6eUdZ5BJJHWcXUGmQrQDcAFv6beYppOC4GLqNnmeVJ8QlseCQNJDqgbuJpoodQrVpzioJ7fDvJrKjShCTk1u/IiLRdE0ckdWg9YHIjQHPVbstTt4x2Tlhtdxh/wANrylvjHKT7zctdmkGrHeBXunUg+oVKcl0Ia1K7TZRqFN25s73RwuaC4Nc8OABNMQbQ0H2SEq66nu1kuKOn+jeyviu+ztkBDqE0Ooru7tO5Y1z7+PA2LfjFvxJu8Le2IH6VOqPeeSw9S1OnaRafvNcEaVrayrS8Opp3RezXBsb3frNBX53fxVXSdVjWgqdR+39yxe2MoN1IL2fsS63zMEgQkDBAAmIEgBAxoEMIGjFaIMYGdKL1CW1nicNxr/IPrez8VJ23gR9j4nk3cfp+z8U+38A7HxPBuo/T/0/in6x4C9XfeeDcx/eD7v4p+s+AvVn3nk3Gf3g+7+KfrXgL1V95v3fYhECAak6nT2KvUqObyT0qSgjbUZKfNm2eL5dbsWvyibwxup7KLYpfyo+Rl1P5jN7Yq77ZahNHC1z44hjoXUDXOPqsByxOoTQfR8ZaNzChLE+vUgurWdeGYdOhnlaWktcCCDQgihB4EHetdSTWUYri08MsOxkJitEVokJYxuLcSXAtLaU4Z1ryXL6x6QWVNOhuy/DikdLpOiXc2q+MLx5s65Z5mvaHscHNOhCzqdSNSKlB5RqThKEtslhla2q2Fs1ulgtDnPikjcC58VA57W5taXbiDQh2ozHCk8ajimkRSgm8loooz2QO2FwWS1xtNpIYYzijlqAWHI0qciDQVHIb81LTlNZUFnPQjqbFiU3jHUjhaWv9VwNeBrr2Ll6tGrCWJxafijoKValUjmEk/JlmscPRxhrjpUk7tSSt62pOnTUTHuKqqTczmFz2+W1Xm17XvDXyl1A4gdGwEtBFfotAXUVqUaNnhpZx9WcxRqSrXeU+GfoS9/XpM62mOJ5AD2RDIHOoDtR9InwUVtbU1a75rjhsV1d1Xd7IS4ZSL+VhnRHiSNrsnNB7QD5pptcjy4p80ab7osxNTCyvIYf9tFMriqv7mQu1ovjtRuMYAA0AAAUAGgHAKFvPFkySSwjFabO17S1w19h4hVrq1p3FNwmv8EtGrKnJSRguywiJoFBiPrOG/lXgoNOsI2tJRx7XVkt3cyrTz06I3FolUSBAgBIGCBAgAQMaBA5wAqTQc14nOMFuk8I9RTfBEfZr2Y6R7CQBlgJNMXHXnosm11ilWryp5SX9r7y7VsZwpKaXHr4EitgojQAIGhoGCAGkAIA4x6Y9nHRT/LmCscxAf8AUlDQB3Oa2vaDxC0LWrmOx9Cnc0+O5Fh9Bj2/JLUB6wtFT2GOPD5O8FXu/fXkT2/ulr2ouqF8b5zE0ytbk6mYFRXtoK66LMv7itCzqRpyaWC5Z29Gd1CU4rOSpwxVzXzyUsHXyljgTeyFrLZpIDo4Fw5OFPMeS6TQa8lJ03yayZerUVKlGsua4FvXUHPmO0ztjY6R5o1oLnHgAKleoxcmormzzOahFyfJHIL+vuS1SF76ho9Rm5o+PErrLW1jQhhc+rOMvLudzPL5dER0ctDUGh8D4qzKKksNZKqcoPMXgmnbXWlsEsDnYw9pYHO9dtcj1t+VdfFUJ6dSdRTjww+XQ0qOp1tjpy48OfUzejSICa0Wh3qxQnxca18GO8VDqrbhGmur/f3LWlpKUqj6INlqzW2JztS90ju0Au81PfYpWrS7kijp+at2m+9s6guYOvBMBIAEm8CwKqN0e8MME00+QAmISBAgBIGCBAgYIENACkjDhRwBHAqKrRhVjsmso9wnKDzF8SKguRgke54Dm5YAc+2o5aLEtdDp068pyWY/2o0amozdJRi8PqSsjsLSaVoCaDluW1Wn2dNySzhcjPgt0ku8hzfjvoDxK5N+k1Vf9NfNmqtNh+I8m/nfQHiUf6mq/wDGvmz1/DIfiYjtA/8Adt8Sj/UtX/jXzZ6/hcPxM8naJ/7tviU/9S1f+NfNj/hUPxM8naV/7tviU/8AUlT8C+bH/CYfiZ5O07/3bfEp/wCo6n4F8z1/CIfiZts6O8LPPDPH1HdQ08Q5pPzmmh7QFuaXqE7mLm44aZmX1pGjJRznJzj0dPkuy9Z7utBoJRha7c9zauhe3k5peO0gahbdbFSCmjNpexJxZ2RzQQQcwcjzCpNJrDLKeHlFLve4ZYHGSz1dHrQZlvIjeOf/ACuXvdH2tygsx+qOktNQp1oqFbhLv7zS2bkLrZETqS+v3HJabHZXikWNRio2kkvD7nQqLqjkyreka2FlkwDWR7W9wq8/7QO9aWl099fPcsmZq1TbQwurwcyJqF0xyWMMwvQe0YpHE5JEkUbFhlc0OwuIxAtNDSrTqDy5JOKlzR5lOSeEy5ejeHFPK/6MdO9xFPY0rL1eeKcY97+xp6JTzVlLuX3Ohlc/yOmNAXtF0nR4gBQUdXIu4V8Flw1ahK4dFP4+PcXHZVOy34+HgbxWqUzHaIGvaWPFQdQoq1GFWDhNcGeqdSVOSlHmUW9bIIpHRhwcBv3jkea4K9t/V6zpqWf318TrbSt21NTawWXZX9h/nd7l1Whf0vxZg6t/UfBEwtkzAQJiQAigYIAEACBDQA0DFI8AEnQAnwUVWoqUHN8ksnqEdzUURf8A1V5zbCSOVT5Bc5HXa9RboUW0aPqFNcJT4kJf07pHMLoyygPHPMcgsnUrqdZxc6ezH1NWwpRpp4luIvCszJoZQYEZDKDAjIZQsCMjyZbMS17HUrRzTTiaig71PbSkqsXFZafLvIqzTptN44cy0x3vN/DOH3v7V0f8XuY8FQf1/QwpWVL/AJDYscUE722l0LOmYCxryAXNac6Nd4+3itPTdR9cpt4w0+KKdxQ7KWOZKrQIAQBh+RxYxLgbjFaOoMWYoc+xR9jDdvws95J21Tbsy8dxnUhGc69Ktp69mjro17yO0tA/2lbmjx9+XkjC1mXux8ygurq00481tNdxiJrkzx0z94BSyx7IvkZrHG6aSOJo6z3BranKpNBUrzUqqEXJ9D3TouclFdTrlj2Ssws8UM0TXOa2jntq1xcczRwoaVJ1XNSvqvaOcG1nodKrCi6ahOOWupt3FcEVk6Toi44yK4iDQNrQCgHErxcXU6+N/Q921nTt87OpKKsWjWbYYxIZcIrSmgoDxHPTwVKOn0Y13WS4tft+ZO7mo6fZ54GyVeICHve83A9BBnIcsvm/j5LE1DUJKXq9vxm/oaNpaJrtavCK+p6sFyRsY5sgD3PHXJ8aA6679VJaaTSp0nGp7Upc3+h5r6hOc04cEuSNi6rF0LDHWoxEg76GmvNWrC19Wp9nnPF4ILu47eanjobivFUECYigBFAwQAIAECGgBoGYrX6j/su8iqd//TVPJktD+ZHzNe5/2Q7XeaoaB/RR839ye+/nfIjdqG1dF2O8wsv0lft0/J/kX9JeIyITo1zGTX3B0aMhuDo0ZDcHRoyG40b7Z+ol7B5hb/ow86pR839mZOuS/wDw1PL8zDs5tpPDRk1ZY+Z67Rycdew+IX1e60uFVN0+D+hwFtqk6XCfFfUu+ylsjlZIWOBzFRvHaFw+m6dcWMqsK8cZlldzXgdZUvaN1GMqUs8PkToWoRAgCu3/ALaWOyO6JznSzboYBjkrzAyb3kL3s9ndJpLvfBHndxwuLK5aNrr3l/YWWCzt3Gd7pH044WUoeRWZW1nT6Txvcn/2r82W4WNzP+1LzZXL7u28rU8SzWmEuDQ0ARloABJ4cSUUPS+hRW2EJY+BHX9HZ13unJZ+JXbddl4wjEWtkaNTH1v9NA72LYtfSm3rvCnh9zWDNr+js6aztyvBkdZ78BykbTm34Lfp3yfvIx6mn49x/Bln2Uc11rshaQQZo6EfaClupKVvJruILaMo3EU+87dPM1jS5xoB+fFcdXrwoQc5vCR10Kcpy2xIeG+jjq9tI3ZNNNKb67+fBc9Q16bq5qxxTlyfcaM7BbPYeZLmTQNcwuni1JZRltY4MF6ERF7XkQehhzkOWXzfx8liajqMlL1e34zf0NG0tE12tXhFfUzXTdghFTm8+s73Dl5qxp2nxto5lxm+bIbu7dZ4XCK5IkCtMpCTAEACBCQAkDBAAgQIGNAhoGeJmYmubxBHiFXuqbq0ZQXVM90pbZpvvI+6bQBWF2TgTSu/l2rB0O7jSTtKvCSb+JfvaLl/ux4o83/BUMdwqD36eS8ektByhCounD5nrTamG4kN0S5HazW3h0SNrDeHRJbWG88yhrQXOIAGpJoB3qWjbVa01CnFtvojxUrwpx3TeF4lJ2ntXSuBs0rwQ3C4H9k8Vr6uta719R9G9BuLSnuuIxTzlfiT5cX5HF6vrFGtLZTba5PuISzWwA4JRgdur6rvsuXYRrccS4M5ypbtrdTeUXTYT/GRdj/9jlV1P+nfw+5JpP8AVL4nUXvABc4gAAkkmgAGpJ4LlzsDnl77SWi3ufFYXmGyglr7SMpJjvbBwbux+GmdPUdSo6fHEvaqdI93/l+hLb207h8OEe/9CQ2d2QbG2kbBE06uIq9/Mk5nvXP+q32py7S4liPRfojSVWharbTWX++pZYLhgbq0uPFx9wyWpR0W1prisvxK076tLrjyMz7ns5y6Jvdl5Kw9NtWsdmiNXdZf3Mirx2YaQXQGh+i41B7DqO9Zd1oMGs0Hh9zL1DU5J4qLK7zlu2Oy3SY5I2YZ21xNpTpKagj6XA7/AAIWkatVtanq9x7vLj0/wPUNPhcQ7ajz+/8AkqWyN8Cy2qzyyV6NsrHPA3AEVcBxC7t1ZKnKK45RynZRlUjJ80z6AiY61OD3ZRD1afO7D71wMKFbVK++sttOL4Lv/fU6RzhawxDjJ9SUtFkY9nRkZbqfN4UW/XsqNaj2LXDp4FGnXnCe9PiRFmtD7M7opc2H1XcPw4jcsG2uKum1ewr8YPk+40atKF1DtKfvdUZ7zvM1EUHWe7eM8Nff5K7qGpPKoW3Gb6roQ2tosdpV4RX1M11XaIRU5vPrO9tBy81a07To2scvjN82Q3d06zwuEVyRvrTKYkCBMAQAkCBACQMECBAAgY0CGEDQIA07fd7ZM9HDQ/FZOo6VTu/aXCa5P9S3bXUqPDmu4j5LRaIwWSx9IzSo4faHvCyKlW9oQdG5hvh3l6FO3qy305bWR8c7XEgeB1XNTSTeOXiX3CUVxMi8iBMDRvexQyspNkBoQaEHktLS9VuNPq76PXmnyZUu9Pp3sNk15eBT7RdEjcTmNc9gzLg05D61K0X1bSPSChfxxhxl3Pl8GcPquhV7J596PeufxRovha8YXtBHA+5bsoxksMw4VJ05ZiybuC5bzsbm2yCAzxMr+pe7DLhIIJj3mgOhHCgKxLytT2uip5X2+J0FjRnKSryhhr6/A3r02mF7PbZIS+KBrQ+1Nf1JXurToKVqGgg4iPZv53U7t6dbuolmT4R7l4v8jdtqauamzOEuf6F3uG5Wsa1zmgAAYGUoGgaZe5YWmaY5P1m54yfHj92aFxcpLs6fBI3byvdkXVHWdwG7tKuX+rUbX2ecu79SK3tJ1ePJFetV+2h2j8I4NA8zmucq63d1HwePJGrTsKMeayYIr9tDTXpMXJwBHxRS1i7g8uWfMklYUJLljyLPct7ttAOWF49ZvvHJdTYX8LqPDg1zRjXVpKg+PFdGRu2FgBaJ2jMUDuYOQPcfNZ+uWilDto81z8i5pdw1PsnyfLzOA7Y2ERWqTCKNeBIOWKuIfeDvFb+h3Tr2kc81w+XIydVoKlcPHJ8TtHojvQz3bC1xq6FzoT9ltCzwY5o7lZqx2yeCCEsxLmoz2YLXZmyNLHjL2g8Qq91a07mm4TRLRrSpS3RNe7LtbCDvcdXU3cByVXT9Np2keHGT6k1zdyrvuXcbq0ymUTbHaCVk4jgkLRHTFQ5Oec6O4gCgpzK29PsoTpOU1z5HO6lfzhWUKbxjn5lyu+1tmijlbo9oPYd47jUdyyKlN05uD6G7RqKpBTXU2F4JAQAkCBACQMECBAAEDGECGgECBgkAmOBzBqOS8qUZLK4obTTwxPhYdWtPaAo529KaxKKfwPaqTXJsiLxsGAF7T1d9d34LkdU0Z0E6tL3eq7v8Gra3XaezLma1ks5kdhBGWZ5A8lnWNhUu57Y8lzZYrVlSjlk5DYo2gDCDzIBK7e106hbw2xj8XzMepcVJvOTYCuJJciBvPM0ILksrJDM2Fged9MgeIboDzAU8rirKGxyeCvG1oxnvUVk0ttb5dZbK98ec0hEMA4yvybrwFXf5VHBRzmXJcX5Imk3jC5sq12+j+zzMY3E6OWNtflEZIkMhqS4u351OeYGhC5/TtSuby6qTb/2vwvivAv17anSpRX93f9zNatprxuwGG8miaM5MtkLcwNP10Q0PMcvWNVrXntwcLdpVGuCb+xWpezJOovZ70YrPfdndabDE6QOjtXShsjXA9duHCCd2Ikt41oOK5ew0GpX3zuU1h/PvNWvfxhiNPDyjocVnhjo0Na3wqe85ldFToW9BbYpIz5VKlTi22a163PHM00aGv3OApnwPEKve6dSuIPCxLoya2u50pc8ruKfc85jtER06wY4cnHCQfPuXL6fUlRuo+eH9jeu4Krbvyyi7XyysEw+o72AkLsL2O63mvBnO20sVovxR8/ekdv6yzn6rx4FtPMqr6LP/AGqi8V9ifX17cPJl29Azj8ntg3dO095jFfILfuPeXkZFH3Toj4ZemDw8YMNCKcxl+KyHQuPWu0U/Yxyx+/mXlUpdjt2+1nmba0SseX1oaa0yrx3IE844HMr2va8I3ujmme1w4ENBHFuEDJdLb21rUhuhFM5K5urynNwnJp/vkV+WQkkkkkmpJzJPElaCSSwjP4t5Zlst8WiEUimewa0DjTw0UFS2pVHmUUy1SuKtNYhJo6Tsa+2OhL7WScRBjxAB2GmdaAZHKlc9eS529VFVMUenPzOlsXWdPNX4E+VTLrEmISBggQIAEACBjQIEANAxPbUEGufA0PiFHVpqpBwfJ/A9RlteUYLBZBE3CCTnU1J9g0Hcq9laRtaexNsluK7rS3NGyrZAaV9NrBKOXvCztVeLOo/At2LxXi/Ei9lIiHTE7wz/AOliejcsyqfD8zR1aScY48SxLrDFBIBoAou1MnTXnZYPm2eF85G7G89G2vMAVHaVn61XdHT5Y5zaj8ObJrSG+4WeiyXO5YcMTeLuse/T2UVbRqCpWke98fmTXc91V+BX77kdI94a3GfUa2oAduoScqErm7yo7nUMbsccJmhRiqdDOOmTmF6+ja9OkktIhs8IxBzWxSUEdKBuHLUZGvHhou+qXtG2o7qjbSXF839zBVCdSp7OOJc2yTOjY60U6XCOkoaguGRIPA68qr5td1Y1LiU4SbWeDfM6y1i400pLDL3cTnGzxF+uHU8KnD7KLt9PlJ20HPngwbtRVaSjyyUyAdJam4dHTYh2Y8XkuTortb5bes8/XJ0E32dq8/h/Iud/y4bPMeLS3vd1feus1CooW034Y+fAwLOO6vFeP2Pnr0hT1tEbB8yPPtcSfIDxR6M0tttKfe/sGu1N1dR7l9zpnoSsRZd75T/+s73D7LQ2Pza5a9d+2Z1PhEu/y+HFg6VmKhOHEK0GuVV57OeM4eBdtT3bdyyZulbQHEKHTNQynGPCTwTRi5cUjE62Rj5w9pULu6K/uJVb1X0Kz6QpIjZmOoC7pA1jt4yJd3UGnYtnR6m+rmD4Y4mJrVNRpe2uOeBzZ7l0pzKRK7H9GbZZ2yNDgXEAHTFhOE07aKlfuSoScWX9PUXXjuR1e8JXtYTG2poe7nTeuI1GtXpUXKjHL+3j4nZW0Kc5pTeDQuCeVzaOb1BWjyc+ym/tVDQ69xUpYmvZ6SLepU6UZZi+PcS5W+ZYigYIECABMASAEDGgR4mmaymI0qQ0dp0UNavCkk5vGXj4klOnKedq5GRSngiNp7/isUQllNMTsDMiRioTnTdQFR1VWcH2Md0iSm6W5drLCOfnbWEkk2t+eeXSAeAC5uelaxJt8f8A2/ybav8ATUsLHy/we/01sxFHWp5HPpT7lBPRtXmtsk2v/L/IfxCwTysfI9xbbWJulqcOxso8goYaFqtP3IteUsfmeZajZy5tP4Gwzb6xb7W/7s39qkWkax1cv/f/ACRO7s+mPkT2zG21jtMjbNHMXyODi3qPFQ0FxBLmgaArd02lfUo7LmPDo85+DKNxKjN5pv4FtWoVznjX4r1vUn5rbK0dnRkn2rA9KW1a0Uu+X5FzTONWfwOjWP8AZx0+i3yC07VJUYY7kRVPffmVaV2CWp+bJU9zqrgpy7G73S6S/M2orfSwuqLTLG2RhBza4bvEELvalOnc0nF8YyRixlKnLPVETHs3Hiq9xcPo0pXtKx6Ho/Rpz3Sk2u4vS1Go44iseIbR3o2NhiYeuRTL5rfjTRS6rfxoU+yh7z+iFY2rqz3y5L6mhshd5qZ3DIVazmfnH3eKp6FaPLry8kWtUuFhUl8Q23vFrWiKtAB0jzwABpX2nwUutVnNxtoc2/8A4eNMpqKlWlyX7Z883lanWieSQDOR/VHLJrR4ABdfY23YUYUV0X1Ocu7jtasqr/aLtZZpGwxwdI8sY2gbiOHiTh0zJJ710tK2pwXBLPecncXVSo3lvHcSFzS4ZYzurQ9+XvTuI7qbIrWe2smdDh9UL55qtPbXz3o+iabPNLHcJ6y2aaMFpu0TMo5gePaD5g81btKlzRfaUH8vzRXuqdvWXZ118/yZvXLccEMZZ0LBiydiGIuH1ifLRb0bu5rLdWeH4GI7O2ovbSXDxI1+xFnbPHaInujDHh5YM2ktOIUcTUCoz17leepVOycJ4eVzZT/htPtFOHDjyLNHM11cLgaa0NaLNjUhPKi8mlKnKHvLA42BoDWigGgCcIRhHbFYR4lJyeWNexCQMECEmAIAaQAEDGgRCX9ZJHYSHFwLqBv0SdP+VymtWNzOcZqTkm8Jd2TZ0+4pRTTWHj5kpYYXsbhfIXniRSnLn2ldDaUalKmo1JbmZ1xUhUnmEcIovpr/AMJZ/wD2B/TkWtZe+/Iz7r3DkVggEksMZJAfIxhI1Ac4A055q1c1HTpTmuaTfyRVoxU5xi+rR0STYKxDfN99v9q+dP0uvc8o/I6qOjW/j8zWk2GsfGX77f7U16VXr6R+RNHRLbx+ZUNrbojs0kbYi4hzanEQc6kbgF02i6jVvaUpVEsp44GRqllTtakVDk0SXoj/AO6Wf7M39J60q/uFKj7x9BqoWTntuHRXxaGnIWizxSNPF0fUI8A4rH9I6TqWEZr+yX0ZY0+e24ce9fYvtzTYom8W9U92nsolpFdVbWPeuD+BJdQ21H4kbf1gNTK0VB9am48exY+uadPe69NZT5/qW7K4WNkvgRtkvSWIUaQRwdmB2LLs9VuLZbYvK7mW6tpTqvL5nq1X/O4UBa37Iz8SSrdXXbmosRwvLmKnp9KLy+J5uu4pJTjlq1mpr6zvzxUljpNW4l2lbKX1Y7i+hSW2nxf0RY7xtsdmi0GQoxo38B2c10l1c07Ojn5IyaFGdxUx82cP9Ie0JcXWdrqveazEbhqGd+WXCg3qpoNjOtUd7W+H6/DoT6rdRp01bUvj+hXdnrFU9M7QZN7dCfcu/sqGXvfwOK1C4xHs4/Etthu+aX9lE9/NrSR3nRXp16VP3pJGVC3q1Pdi2WGw7GWx1C7DH9p1T4Nr5qjU1SglhZZdpaPcNpvCOg2SyNYOJ3k8eS56q1UeWjpqUezWEx2mytfyPH4qpXtYVV3MtUbiVN+BEyMkiNdOY0Kx5Qq28s8vE1Iyp144B95SnIUryGfvXt31eXBfRCVnRjxZ6ZdssmcriBwJqfDQKWFlWrcassI8TvKNLhTWSTstlZGKMGup3lalC3hRWIIzK1edV5kzMpyESBggATEJAAgBpACABAxoENAHPfTX/hLP/wCwP6ciuWXvvyK917hyGxz9HJFJSuB7H00rhcHUr3K3cU+1pyp96a+aKlKeyal3NF5k9IkR/wDHf99vwXCP0NqZ/mr5HSR1yH4Ga0m38R/8d/3m/BP/AEjUX/VXyJY6/D8DKvtNfItT2PawsDW0zNSc67lv6TprsacoOWcvJmahfK7mpJYwiX9Ef/dLP9mb+k9Xq/uFaj7x9BKoWSneki7JDHDbrOKzWVxeR9OI/tG91K9mJeuzhWhKhU92Sx8ejPEnKDVSPNGTZy/WOa2eI4o3jrDeOIP1guDpVK2kXUqdVcOviujRutQu6SlD9+BcrPaGPGJhBH51XXULinXhupvKMydOUHiSME12QONXRivLLyUNTTrWo8ygsnuNxVisKR6gu6FmbY2g8aVPiV6pWVvR4wgkKdepPhKTNO8r9iiqGnG/gNB2lVLzVqNBYi90u5fmWLexqVeL4I5RtrtoQ5zGOD5jkSPViHD7XLx51tP0uvqFRXF1wj0Xf5eBNdX1K0h2VD3u/u/yQ2wWw8t4SdPPibZg6rnmuKZ2pawndxf3DPTsJzjSjsh/8OfhBze6R2e79m7FAAIrOwUyBIxEd7qlQzuaslhyeBwtaUXlR4kqFCT8hOdQEnd3+xeKk1CLk+g0nJ4RAz35SUOoejAoRvP1qcVy0tezdppPZyx18zYhp2aLX9xNwSh7Q9taHMVBB8CuppVFUgpx5MyJwcJOLPZXtpPmeU8Ca0DQAdgXlQiuSG5SfNjXs8iQIEAJAwQISYAgAQAIAaQAgY0CBAGreN2We0NDLRDHK0HEBI0OANCKgHfQnxTjKUeTDmaH6IXZ/AWb+Sz4L12tT8TDau4X6H3Z/AWb+Sz4I7Wfew2oP0Ouz+As38lnwS7SfePCF+h11/wFl/kR/BG+XeBsWDZqwQPEsFkgjeK0eyJjXCooaECuYJC8uTfNgSqQwQBz6+dj7RZpH2m6sJa41lsrjRp5xHQHllTdUdVR3drb31Ps7hcVykuaHSqVKEt1L4roR1m2ziY/BOJbLKNWyNcPAgacyAuWq+jl/bS3W0ty8Hh/FGrDUreosVVjz/Ulv05jA/x0f3mV8qrwo62uG2XyPe6wfHcvmQ97ekGzgEGd8v1WA08TRqnho+r3X817V4v8keXf2VH3Fl+C/MrTr0vK8P1dis7ww5VZvH1pjRo7iFuWWgWlp7dV7pePL5fqZ9xqlev7MFtRadlPROxhbLeDhIRmIWE4B9t+Rd9kUH2gtapcZ4QKUKOOLOnRsDQGtAAAAAAAAA0AA3KsTnpAsggAQI033ewyiU7hpTV253bT3LOlptKV0rjHTl495ajdzVF0v35G2tEqgmAIASBAgBIGCABMQkACABAAgBoAEgBAxoECAGgYIAEACABADSAEACBmK02aOQYZWNeOD2hw8ChcOQEYdlbu1+QWX+RF/avfaT72edse4yWfZywRnFHY7O08WwRg+OFJzk+bHhdxKDgvI8ggAQIEAJAAmAIAEACABAhIASBggATEJAAgBIECAGgYIAaQAgYIAaBAgBoGCABAAgAQAIAaQAgAQAIAEACAEgATAEACABAAgBIECAEgAQMECEmAIASABAj/2Q=="
            alt="Our Mission"
          />
        </div>
        <div className="mission-text">
          <h3>Our Mission: Making Campus Navigation Effortless</h3>
          <p>
            Our mission is to provide an efficient digital solution for students and faculty, 
            helping them locate resources and navigate the campus effortlessly. We aim to make 
            your campus experience smooth and hassle-free.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;