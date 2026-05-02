import { GoLaw } from "react-icons/go";
import { MdGrass, MdOutlineHealthAndSafety } from "react-icons/md";

const Guidance = () => {
    return (
        <div className="md:py-16 py-8 md:px-6 px-3">
            <h2 className="font-bold text-3xl dark ">Stewardship & Guidance</h2>
            <p className="light-dark pt-1.75 pb-10">Essential tips for selecting and caring for your Qurbani animal.</p>
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="p-6 bg-[#EEEEE7] rounded-4xl border border-[#C3C8BB]/50">
                    <div className="flex items-center justify-between">
                        <MdOutlineHealthAndSafety className="bg-[#2D4F1E]/10 text-[#173809] h-12 w-12 rounded-full p-2.5" />
                        <MdOutlineHealthAndSafety className="text-[#173809]/15 h-12 w-12"></MdOutlineHealthAndSafety>
                    </div>
                    <div>
                        <h4 className="text-xl dark py-2.5">Health Verification</h4>
                        <p className="light-dark text-sm">Always check for bright eyes, active movement,
                            and a healthy coat. Ensure the animal has no
                            visible injuries or signs of lethargy before making
                            a purchase.</p>
                    </div>
                </div>
                <div className="p-6 bg-[#EEEEE7] rounded-4xl border border-[#C3C8BB]/50">
                    <div className="flex items-center justify-between">
                        <GoLaw className="bg-[#FFD1B3]/30 text-[#79573F] h-12 w-12 rounded-full p-2.5" />
                        <GoLaw  className="text-[#79573F]/15 h-12 w-12" />
                    </div>
                    <div>
                        <h4 className="text-xl dark py-2.5">Age Requirements</h4>
                        <p className="light-dark text-sm">For a valid Qurbani, goats/sheep must be at least
                            one year old, and cattle must be at least two
                            years old. Verify age through dental checks if
                            possible.</p>
                    </div>
                </div>
                <div className="p-6 bg-[#EEEEE7] rounded-4xl border border-[#C3C8BB]/50">
                    <div className="flex items-center justify-between">
                        <MdGrass className="bg-[#F59E0B]/10 text-[#F59E0B] h-12 w-12 rounded-full p-2.5" />
                        <MdGrass className="text-[#F59E0B]/15 h-12 w-12" />
                    </div>
                    <div>
                        <h4 className="text-xl dark py-2.5">Pre-Sacrifice Care</h4>
                        <p className="light-dark text-sm">Provide ample fresh water and clean fodder in the
                            days leading up to the sacrifice. Keep the animal
                            in a stress-free, shaded environment.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guidance;