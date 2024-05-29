"use client";
import { Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ContactInformation = () => {
  return (
    <section className="">
      <div className="wrapper flex h-full gap-[75px] lg:gap-[91px] pb-[50px] lg:pb-[86px] flex-col lg:flex-row">
        <div className="relative lg:w-1/2  order-last lg:order-first  pt-[46px] lg:pt-[139px]">
          <Image
            src="/assets/images/map-bg.png"
            width={463}
            height={499}
            className="-z-10 absolute top-20 -left-3 hidden lg:flex object-cover"
            alt="map background"
          />
          <div className="lg:max-w-[600px] lg:w-full max-lg:w-full max-lg:max-w-none max-h-[450px] h-full bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5769731090213!2d3.3419448749693443!3d6.574949993418457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92068b703db3%3A0xc3e211894e5af282!2s46b%20Adekunle%20Fajuyi%20Way%2C%20Ikeja%20GRA%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1698796449713!5m2!1sen!2sng"
              width={600}
              height={450}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Miles location"
              className="w-full"
            />
          </div>
        </div>
        <div className=" pt-[46px] lg:pt-[139px]">
          <div className="mb-12">
            <h3 className=" text-2xl lg:text-[40px] font-bold font-instrumental_sans">
              Head Office
            </h3>
            <div className="h-[3px] bg-black w-[69px] my-1 mb-9" />
            <div className="flex gap-[30px] items-center">
              <div className="bg-black p-4 flex justify-center items-center rounded-[5px] text-mile-yellow">
                <Home />
              </div>
              <div>
                <p className="text-[17px] text-mile-black font-bold mb-[3px]">
                  Location
                </p>
                <p className="font-manrope text-mile-prime-400">
                  16b Ibrahim Kazeem Street, Waziri Close Jericho Lagos.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className=" text-2xl lg:text-[40px] font-bold font-instrumental_sans">
              Contact
            </h3>
            <div className="h-[3px] bg-black w-[69px] my-1 mb-9" />
            <div className="flex gap-[30px] items-center mb-10">
              <div className="flex justify-center items-center ">
                <svg
                  width={58}
                  height={55}
                  viewBox="0 0 58 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width={57}
                    height={54}
                    rx={5}
                    fill="#0A0A0A"
                  />
                  <path
                    d="M31.4938 21.0359C32.4705 21.2265 33.3682 21.7042 34.0718 22.4079C34.7755 23.1116 35.2532 24.0092 35.4438 24.9859M31.4938 17.0359C33.5231 17.2614 35.4154 18.1701 36.86 19.6129C38.3047 21.0558 39.2158 22.947 39.4438 24.9759M38.4438 32.9559V35.9559C38.4449 36.2344 38.3879 36.5101 38.2763 36.7653C38.1647 37.0205 38.0011 37.2495 37.7959 37.4378C37.5906 37.6261 37.3484 37.7694 37.0845 37.8586C36.8207 37.9479 36.5412 37.981 36.2638 37.9559C33.1866 37.6216 30.2308 36.5701 27.6338 34.8859C25.2176 33.3506 23.1691 31.3021 21.6338 28.8859C19.9438 26.2771 18.892 23.3069 18.5638 20.2159C18.5388 19.9394 18.5717 19.6607 18.6603 19.3976C18.7489 19.1344 18.8914 18.8926 19.0785 18.6876C19.2657 18.4825 19.4936 18.3187 19.7476 18.2065C20.0016 18.0943 20.2761 18.0362 20.5538 18.0359H23.5538C24.0391 18.0312 24.5096 18.203 24.8775 18.5195C25.2455 18.8359 25.4859 19.2754 25.5538 19.7559C25.6804 20.716 25.9152 21.6587 26.2538 22.5659C26.3883 22.9239 26.4174 23.3129 26.3377 23.6868C26.2579 24.0608 26.0726 24.4041 25.8038 24.6759L24.5338 25.9459C25.9573 28.4495 28.0302 30.5224 30.5338 31.9459L31.8038 30.6759C32.0757 30.4071 32.4189 30.2218 32.7929 30.142C33.1669 30.0623 33.5559 30.0914 33.9138 30.2259C34.8211 30.5645 35.7637 30.7993 36.7238 30.9259C37.2095 30.9945 37.6532 31.2391 37.9703 31.6134C38.2874 31.9877 38.4559 32.4655 38.4438 32.9559Z"
                    stroke="#F8E71D"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[17px] text-mile-black font-bold mb-[3px]">
                  Phone Number
                </p>
                <p className="font-manrope text-mile-prime-400">
                  <Link href="tel:+234808080808080"> +2348012345678</Link>
                </p>
              </div>
            </div>
            <div className="flex gap-[30px] items-center">
              <div className=" flex justify-center items-center ">
                <svg
                  width={58}
                  height={55}
                  viewBox="0 0 58 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.434692"
                    width={57}
                    height={54}
                    rx={5}
                    fill="#0A0A0A"
                  />
                  <path
                    d="M39 27.4347H33L31 30.4347H27L25 27.4347H19"
                    stroke="#F8E71D"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.45 20.5447L19 27.4347V33.4347C19 33.9651 19.2107 34.4738 19.5858 34.8489C19.9609 35.224 20.4696 35.4347 21 35.4347H37C37.5304 35.4347 38.0391 35.224 38.4142 34.8489C38.7893 34.4738 39 33.9651 39 33.4347V27.4347L35.55 20.5447C35.3844 20.2115 35.1292 19.9311 34.813 19.735C34.4967 19.5389 34.1321 19.4349 33.76 19.4347H24.24C23.8679 19.4349 23.5033 19.5389 23.187 19.735C22.8708 19.9311 22.6156 20.2115 22.45 20.5447Z"
                    stroke="#F8E71D"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[17px] text-mile-black font-bold mb-[3px]">
                  Email
                </p>
                <p className="font-manrope text-mile-prime-400">
                  <Link href="mailto:mile2023@gmail.com">
                    support@mileadmin.com
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;
