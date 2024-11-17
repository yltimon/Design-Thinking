import { useNavigate } from "react-router-dom";

function Resources() {
    const navigate = useNavigate();

    const handleChatbotClicked = () => {
        navigate("/")
    }

    const handleScreeningClicked = () => {
        navigate("/screening")
    }

    const handleGroupClicked = () => {
        navigate("/community")
    }

    const handleSelfAssessClicked = () => {
        navigate("/selfassess")
    }
    return(
        <div className="container mx-auto flex flex-col min-h-screen">
            <div className="flex justify-between mt-8">
                <div>
                    <h1 className="text-2xl font-bold">Breast Cancer Resources</h1>
                </div>
                <div>
                    <button className="bg-pink-400 hover:bg-pink-500 text-white font-medium py-2 px-4 rounded-lg mb-4" onClick={handleChatbotClicked}>Ask the Chatbot</button>
                </div>
            </div>

            <div className="flex flex-col w-2/3 mx-auto justify-between gap-4 md:flex-row md:w-full text-center mt-8">
                <div className="shadow-lg rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-2">Self Breast Examination</h2>
                    <p className="text-left">Explore the breast self exam. Every woman should do once a month at home.</p>
                    <button className="bg-pink-400 hover:bg-pink-500 text-white font-medium py-2 px-4 rounded-lg mt-4" onClick={handleSelfAssessClicked}>Steps</button>
                </div>
                <div className="shadow-lg rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-2">Support Groups</h2>
                    <p className="text-left">Connect with local and online support groups to share experiences and gain emotional support from others affected by breast cancer.</p>
                    <button className="bg-pink-400 hover:bg-pink-500 text-white font-medium py-2 px-4 rounded-lg mt-10" onClick={handleGroupClicked}>Find Groups</button>
                </div>
                <div className="shadow-lg rounded-lg p-6">
                    <h2 className="text-xl font-semibold mb-2">Components of Screening</h2>
                    <p className="text-left">Learn about both genetic and breast screening today.</p>
                    <button className="bg-pink-400 hover:bg-pink-500 text-white font-medium py-2 px-4 rounded-lg mt-4" onClick={handleScreeningClicked}>Learn </button>
                </div>
            </div>
        </div>
    );
}

export default Resources