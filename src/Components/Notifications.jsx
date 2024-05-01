



function Notifications() {
    return (
        <div className="p-10 w-80 flex flex-col items-center justify-center py-22 shadow rounded-md">
            <img src="Camera.png" alt="null" width={120} />
            <div className="mt-3 text-center">
                <h1 className="font-medium text-[22px]">Allow Notifications</h1>
                <p className="leading-5 mt-2 text-center text-gray-800">The majestic Rocky Mountains are a major tourist location in the western United States.</p>
            </div>
            <button className="mt-5 bg-indigo-500 text-white text-md font-medium py-3 px-28 rounded-lg uppercase">Allow</button>
            <button className="mt-2 text-indigo-500 text-md font-medium py-3 px-23 rounded-lg uppercase">Not Now</button>
        </div>
    )
}


export default Notifications;