/* eslint-disable @next/next/no-img-element */
export default function Footer() {

    return(
        <div className="bg-[#222b27] w-full">
            <div className="w-full max-w-[1336px] mx-auto px-5 block">
                <div className="gap-x-[60px] text-[#627b70] justify-between flex pt-[80px] pb-[100px]">
                    <div className="items-start flex flex-col">
                        <a href="" className="max-w-full inline-block pl-0 text-[40px] text-[white]">Unitech</a>
                        <div className="text-[#627b70] w-full max-w-[260px] my-[15px] mt-0">4517 Washington Ave. Manchester, Kentucky 39495</div>
                        <a href="" className="text-[#627b70] no-underline transition-[color] duration-[0.3s]">info@example.com</a>
                        <div className="gap-x-2.5 flex mt-5">
                            <a href="https://twitter.com/" className="social-medias"><img src="" alt="" className="align-middle max-w-full inline-block"/></a>
                            <a href="https://facebook.com/" className="social-medias"><img src="" alt="" className="align-middle max-w-full inline-block"/></a>
                            <a href="https://youtube.com/" className="social-medias"><img src="" alt="" className="align-middle max-w-full inline-block"/></a>
                            <a href="https://instagram.com/" className="social-medias"><img src="" alt="" className="align-middle max-w-full inline-block"/></a>
                        </div>
                    </div>
                    <div className="gap-x-[136px] items-start flex">
                        <div>
                            <div className="text-white text-sm leading-[150%] mb-[15px]">Product</div>
                            <div className="flex-col flex">
                                <a href="" className="footer-link">Home</a>
                                <a href="" className="footer-link">Features</a>
                                <a href="" className="footer-link">About us</a>
                                <a href="" className="footer-link">Integrations</a>
                                <a href="" className="footer-link">Pricing</a>
                            </div>
                        </div>
                        <div>
                            <div className="text-white text-sm leading-[150%] mb-[15px]">Company</div>
                            <div className="flex-col flex">
                                <a href="" className="footer-link">Careers</a>
                                <a href="" className="footer-link">Blogs</a>
                                <a href="" className="footer-link">FAQ</a>
                                <a href="" className="footer-link">Reviews</a>
                                <a href="" className="footer-link">Contact us</a>
                            </div>
                        </div>
                        <div>
                            <div className="text-white text-sm leading-[150%] mb-[15px]">Resources</div>
                            <div className="flex-col flex">
                                <a href="" className="footer-link">Style Guide</a>
                                <a href="" className="footer-link">Licensing</a>
                                <a href="" className="footer-link">Changelog</a>
                                <a href="" className="footer-link">Password</a>
                                <a href="" className="footer-link">Error 404</a>
                            </div>
                        </div>
                        <div>
                            <div className="text-white text-sm leading-[150%] mb-[15px]">Utilities</div>
                            <div className="flex-col flex">
                                <a href="" className="footer-link">Privacy Policy</a>
                                <a href="" className="footer-link">Terms & Conditions</a>
                                <a href="" className="footer-link">Cookie Policy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-3.5 border-t-[rgba(255,255,255,0.1)] border-t border-solid">
                <div className="w-full max-w-[1336px] mx-auto px-5 block">
                    <div className="text-[#627b70] justify-between text-sm leading-[150%] flex">
                        <div>© 2024 unitech. All Rights Reserved.</div>
                        <div>Designed by Nixar. Powered by Webflow.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}