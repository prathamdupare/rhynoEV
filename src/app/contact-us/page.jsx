export default function Component() {
  return (
    <div className="flex max-w-4xl mx-auto mt-20 py-12 md:py-20">
      <div className=" space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Contact Us</h1>
          <p className="text-muted-foreground mt-2">
            Get in touch with us for any inquiries or support.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <MailIcon className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">Mail</p>
                <p className="text-muted-foreground">info@rhyno.in</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <PhoneIcon className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">Mobile</p>
                <p className="text-muted-foreground">+91-9023987528</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <LocateIcon className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium">Location</p>
                <p className="text-muted-foreground">
                  Rhyno Wheels Private limited, Near UG hostel gate #2, Behind
                  PDEU, Raisan, Gandhinagar, Gujarat, India.
                </p>
              </div>
            </div>
          </div>
          <div
            className="rounnext.svg"
            width="600"
            height="400"
            alt="Location"
            className="w-full h-full object-cover"
            style={{ aspectRatio: "600/400", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}

function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
