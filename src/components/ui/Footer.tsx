export const Footer = () => {
    return (
        <footer className="py-3 px-4 bg-neutral-900 border-t text-sm text-gray-500">
            <div className="flex mb-2 justify-between">
                <span>© 2025 BookMyBirthday. All Rights Reserved.</span>
                <span>info@bookmybirthday.com</span>
                <span>Birthday Villa, Goregoan (W), Mumbai - 65</span>
            </div>
            <div className="flex justify-center gap-4">
                <a href="#" className="mr-2 hover:underline">Privacy Policy</a>
                <a href="#" className="ml-3 hover:underline">Terms of Service</a>
            </div>
        </footer>
    )
}