

const Footer = () => {
    return (
        <div className="border-t border-[#E7E5E4]">
        <div className="py-12 px-8 flex flex-col md:flex-row items-start justify-between md:gap-8 space-y-3.5 bg-[#F9F8F6] ">
            <div className="space-y-3.5">
                <h1 className="primary text-lg font-bold">QurbaniHat</h1>
                <p className="light-dark font-medium text-[12px]">&copy; 2026 QurbaniHat. Professional stewardship for<br />
                    the heritage of the trade.</p>
            </div>
            <div className="space-y-3.5">
                <p className="secondary">About Us</p>
                <p className="secondary">Contact info</p>
            </div>
            <div className="space-y-3.5">
                <p className="secondary">Terms of Service</p>
                <p className="secondary">Privacy Policy</p>
            </div>
            <div className="space-y-3.5">
                <p className="secondary">Livestock Care</p>
               
            </div>
        </div>
        </div>
    );
};

export default Footer;