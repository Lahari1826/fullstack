import qrcode

def main():
    data = input("Enter the text or URL to encode in the QR code: ")
    if not data.strip():
        print("No input provided. Exiting.")
        return

    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(data)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")
    filename = "qrcode.png"
    img.save(filename)
    print(f"QR code saved as {filename}")

if __name__ == "__main__":
    main()