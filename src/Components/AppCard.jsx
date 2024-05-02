



function AppCard() {
    return(
        <div className="flex flex-col text-start p-3 shadow border mt-5 rounded w-96">
            <img src="/cover_img.jpg" alt="" width={380} className="border rounded-xl shadow" />
            <div className="mt-5">
                <p className="text-2xl font-medium">Muhammad Naveed</p>
                <div className="flex justify-between items-center text-sm">
                    <p className="text-slate-600 font-medium">Software Engineer</p>
                    <p className="text-green-600 font-medium">Available for work*</p>
                </div>
                <ul className="ps-5 mt-3 text-slate-600 font-medium">
                    <li className="list-disc">2+ year experience.</li>
                    <li className="list-disc">Rainbow language user.</li>
                </ul>
                <div className="flex items-center justify-end gap-3">
                    <button className="text-indigo-600 underline w-32 mt-6 py-2 bg-white rounded-full">View Profile</button>
                    <button className="bg-indigo-600 w-32 mt-6 py-2 text-white rounded-full">Hire</button>
                </div>
            </div>
        </div>
    )
}

export default AppCard;