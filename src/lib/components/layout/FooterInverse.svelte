<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #ffffff;
        }

        .contact-section {
            background-color: #4A5B4C;
            padding: 60px 40px;
            margin: 40px 80px 0px 80px;
            border-radius: 20px 20px 0 0;
        }

        .contact-container {
            max-width: 1400px;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 60px;
        }

        .contact-left {
            flex: 0 0 auto;
            max-width: 500px;
        }

        .contact-left h2 {
            color: #FDFF96;
            font-size: 2.5rem;
            margin-bottom: 20px;
            font-weight: 600;
        }

        .contact-left p {
            color: #FDFF96;
            font-size: 1rem;
            line-height: 1.6;
            margin-bottom: 30px;
        }

        .contact-button {
            display: inline-block;
            background-color: #FDFF96;
            color: #4A5B4C;
            padding: 18px 45px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1rem;
            transition: background-color 0.3s ease;
        }

        .contact-button:hover {
            background-color: #e0e070;
        }

        .contact-right {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 20px;
            margin-left: auto;
        }

        .info-grid {
            display: grid;
            grid-template-columns: repeat(3, auto);
            gap: 40px;
            justify-content: flex-end;
        }

        .info-grid .contact-info:nth-child(4) {
            grid-column: 2;
        }

        .info-grid .contact-info:nth-child(5) {
            grid-column: 3;
        }

        .contact-info {
            color: #FDFF96;
        }

        .contact-info h3 {
            font-size: 1.2rem;
            margin-bottom: 10px;
            font-weight: 600;
        }

        .contact-info p {
            font-size: 1rem;
            line-height: 1.5;
        }

        .contact-info a {
            color: #FDFF96;
            text-decoration: none;
        }

        .contact-info a:hover {
            text-decoration: underline;
        }

        .social-icons {
            display: flex;
            gap: 15px;
            justify-content: flex-end;
        }

        .social-icon {
            width: 50px;
            height: 50px;
            background-color: #FDFF96;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            text-decoration: none;
            transition: background-color 0.3s ease;
        }

        .social-icon:hover {
            background-color: #e0e070;
        }

        .social-icon svg {
            width: 24px;
            height: 24px;
            fill: #4A5B4C;
        }

        .footer-text {
            text-align: right;
            color: #666;
            font-size: 0.9rem;
            margin: 0;
            padding: 20px 90px;
            background-color: #f0f0f0;
        }

        @media (max-width: 1024px) {
            .contact-container {
                flex-direction: column;
                gap: 40px;
            }

            .contact-right {
                width: 100%;
                align-items: flex-start;
            }

            .social-icons {
                justify-content: flex-start;
            }

            .info-grid {
                width: 100%;
            }

            .footer-text {
                text-align: left;
            }
        }

        @media (max-width: 768px) {
            .contact-section {
                margin: 20px;
                padding: 40px 30px;
            }

            .contact-left h2 {
                font-size: 2rem;
            }

            .info-grid {
                grid-template-columns: 1fr;
                gap: 30px;
            }
        }
    </style>
</head>
<body>
    <section class="contact-section">
        <div class="contact-container">
            <div class="contact-left">
                <h2>samenwerken?</h2>
                <p>Neem contact op voor een vrijblijvende offerte, een kennismakingsgesprek, of als je gewoon een vraag hebt!</p>
                <a href="/" class="contact-button">let's goof</a>
            </div>

            <div class="contact-right">
                <div class="info-grid">
                    <div class="contact-info">
                        <h3>mailen</h3>
                        <p><a href="mailto:info@goof.design">info@goof.design</a></p>
                    </div>

                    <div class="contact-info">
                        <h3>bellen</h3>
                        <p><a href="tel:+31624576082">+31 6 24576082</a></p>
                    </div>

                    <div class="contact-info">
                        <h3>sliden</h3>
                        <p>@goofdesign.nl</p>
                    </div>

                    <div class="contact-info">
                        <h3>postduif</h3>
                        <p>Oosterweg 87,<br>Groningen</p>
                    </div>

                    <div class="contact-info">
                        <h3>faxen</h3>
                        <p>wat is dat?</p>
                    </div>
                </div>

                <div class="social-icons">
                    <a href="/" class="social-icon" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                    </a>
                    <a href="/" class="social-icon" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <div class="footer-text">
        Algemene voorwaarden | Bedrijfsgegevens
    </div>
</body>
</html>
