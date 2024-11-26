import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="padding-container max-container flex flex-col gap-14 mb-20">
      <div className="flex flex-col md:flex-row md:justify-between mb-10 gap-10">
        <Link href={"/"}>
          <Image src={"./hilink-logo.svg"} alt="logo" width={74} height={29} />
        </Link>
        <div className="flex gap-4">
          <div>
            <h5 className="bold-18">Learn more</h5>
            <ul>
              <li>Aboul Hilink</li>
              <li>Press Realeases</li>
              <li>Environment</li>
              <li>Jobs</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h5 className="bold-18">Our community</h5>
            <ul>
              <li>Climbing xixixi</li>
              <li>Hiking hiking</li>
              <li>Hiking</li>
            </ul>
          </div>
        </div>
        <div>
          <h5 className="bold-18">Contact us</h5>
          <div>
            Admin Officer: <span>123-456-7890</span>
          </div>
          <div>
            Email Officer: <span>test@gm.test</span>
          </div>
        </div>
        <div>
          <h5 className="bold-18">Contact us</h5>
          <div className="flex gap-2">
            <Image
              src={"./facebook.svg"}
              width={24}
              height={24}
              alt="facebook"
            />
            <Image
              src={"./instagram.svg"}
              width={24}
              height={24}
              alt="instagram"
            />
            <Image src={"./twitter.svg"} width={24} height={24} alt="twitter" />
            <Image src={"./youtube.svg"} width={24} height={24} alt="youtube" />
            <Image
              src={"./wordpress.svg"}
              width={24}
              height={24}
              alt="wordpress"
            />
          </div>
        </div>
      </div>
      <div className="border bg-gray-20" />
      <p className="regular-14 w-full text-center text-gray-30">
        2023 Hilink | All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
