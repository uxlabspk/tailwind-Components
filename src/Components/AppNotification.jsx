


function AppNotification() {
    return (
        <div className="mt-5">
            <div className="shadow-sm rounded-lg border p-3 flex justify-between items-center">
                <img src="/Icon_navigation.png" alt="" width={64}/>
                <div className="ms-3">
                    <p className="text-xl text-gray-800 font-medium">You got a message from Annie</p>
                    <div className="flex mt-1">
                        <img src="/clock.svg" alt="" width={16} />
                        <p className="text-gray-600 ms-1">Just Now</p>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default AppNotification;