import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import toast from 'react-hot-toast';

const Home = () => {
  const [text, setText] = useState('');
  const [activeTab, setActiveTab] = useState('url');

  const socialMediaTemplates = {
    url: { 
      placeholder: 'Enter any URL', 
      icon: <img src="https://cdn-icons-png.flaticon.com/512/1150/1150626.png" className="w-5 h-5" alt="URL" />,
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/1150/1150626.png'
    },
    instagram: { 
      placeholder: 'Enter Instagram username or post URL', 
      icon: <img src="https://cdn-icons-png.flaticon.com/512/174/174855.png" className="w-5 h-5" alt="Instagram" />,
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/174/174855.png'
    },
    whatsapp: { 
      placeholder: 'Enter phone number or message', 
      icon: <img src="https://cdn-icons-png.flaticon.com/512/124/124034.png" className="w-5 h-5" alt="WhatsApp" />,
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/124/124034.png'
    },
    facebook: { 
      placeholder: 'Enter Facebook profile or page URL', 
      icon: <img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" className="w-5 h-5" alt="Facebook" />,
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/124/124010.png'
    },
    youtube: { 
      placeholder: 'Enter YouTube video or channel URL', 
      icon: <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" className="w-5 h-5" alt="YouTube" />,
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/1384/1384060.png'
    },
    github: { 
      placeholder: 'Enter GitHub profile or repo URL', 
      icon: <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" className="w-5 h-5" alt="GitHub" />,
      logoUrl: 'https://cdn-icons-png.flaticon.com/512/733/733553.png'
    }
  };

  const formatQRValue = (value) => {
    switch (activeTab) {
      case 'instagram':
        return `https://instagram.com/${value.replace('@', '')}`;
      case 'whatsapp':
        return `https://wa.me/${value.replace(/\D/g, '')}`;
      case 'facebook':
        return `https://facebook.com/${value}`;
      case 'youtube':
        return value.includes('youtube.com') ? value : `https://youtube.com/${value}`;
      case 'github':
        return `https://github.com/${value}`;
      default:
        return value.includes('http') ? value : `https://${value}`;
    }
  };

  const handleDownload = () => {
    const svg = document.querySelector('.qr-code-svg');
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Create two image elements
    const qrImage = new Image();
    const logoImage = new Image();
    
    // Set canvas size larger to maintain quality
    canvas.width = 1024;
    canvas.height = 1024;
    
    // First load the QR code
    qrImage.onload = () => {
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(qrImage, 0, 0, canvas.width, canvas.height);
      
      // Then load and draw the logo
      logoImage.onload = () => {
        // Calculate center position and size for logo
        const logoSize = canvas.width * 0.2; // 20% of QR size
        const logoX = (canvas.width - logoSize) / 2;
        const logoY = (canvas.height - logoSize) / 2;
        
        // Draw logo in center
        ctx.drawImage(logoImage, logoX, logoY, logoSize, logoSize);
        
        // Create download link
        const pngFile = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.download = `qr-code-${activeTab}.png`;
        downloadLink.href = pngFile;
        downloadLink.click();
        toast.success('QR Code downloaded successfully!');
      };
      
      // Set logo source with error handling
      logoImage.crossOrigin = "anonymous";
      logoImage.src = socialMediaTemplates[activeTab].logoUrl;
    };
    
    // Set QR code source with proper encoding
    const encodedData = window.btoa(unescape(encodeURIComponent(svgData)));
    qrImage.src = `data:image/svg+xml;base64,${encodedData}`;
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formatQRValue(text));
    toast.success('Link copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-6xl font-extrabold text-center text-gray-800 mb-6 animate-fade-in">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
              QR Code Generator
            </span>
          </h1>
          <p className="text-center text-gray-600 mb-12 animate-fade-in-delay text-lg">
            Create custom QR codes for your social media profiles ✨
          </p>

          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-gray-100 hover:shadow-blue-100/50 transition-all duration-500">
            {/* Tabs */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              {Object.entries(socialMediaTemplates).map(([key, { icon }]) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveTab(key);
                    setText('');
                  }}
                  className={`px-5 py-3 rounded-2xl flex items-center gap-3 transition-all duration-300 
                    hover:scale-105 hover:shadow-lg
                    ${activeTab === key 
                      ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 text-white shadow-lg ring-2 ring-offset-2 ring-blue-500/50' 
                      : 'bg-gray-100/80 text-gray-600 hover:bg-gray-200'}`}
                >
                  <span className="transform transition-transform duration-300 hover:rotate-12">{icon}</span>
                  <span className="capitalize font-medium">{key}</span>
                </button>
              ))}
            </div>

            {/* Input Field */}
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder={socialMediaTemplates[activeTab].placeholder}
              className="w-full p-5 bg-gray-50/50 backdrop-blur-sm border-2 border-gray-200 rounded-2xl 
                focus:ring-4 focus:ring-blue-100 focus:border-blue-500 
                text-gray-800 placeholder-gray-400 transition-all duration-300 outline-none
                text-lg shadow-inner"
            />
            
            {/* QR Code Display */}
            <div className="mt-10 flex justify-center">
              {text ? (
                <div className="bg-gradient-to-b from-white to-gray-50 p-10 rounded-3xl shadow-xl 
                  transform transition-all duration-500 hover:scale-105 border border-gray-100
                  hover:shadow-2xl hover:shadow-blue-100/50">
                  <div className="bg-white rounded-2xl p-4 shadow-inner">
                    <QRCodeSVG
                      value={formatQRValue(text)}
                      size={280}
                      level="H"
                      includeMargin={true}
                      className="mx-auto qr-code-svg"
                      imageSettings={{
                        src: socialMediaTemplates[activeTab].logoUrl,
                        height: 45,
                        width: 45,
                        excavate: true,
                      }}
                    />
                  </div>
                  <p className="text-center mt-6 text-sm text-gray-600 break-all bg-gray-50 p-3 rounded-xl">
                    {formatQRValue(text)}
                  </p>
                  
                  <div className="flex gap-4 justify-center mt-6">
                    <button
                      onClick={handleDownload}
                      className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 
                        transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-blue-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Download
                    </button>
                    <button
                      onClick={handleCopy}
                      className="px-6 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 
                        transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-gray-200"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                      </svg>
                      Copy Link
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-gray-400 text-center p-16 border-3 border-dashed border-gray-200 
                  rounded-3xl bg-gray-50/50 backdrop-blur-sm transition-all duration-300 
                  hover:border-blue-300 hover:shadow-lg group">
                  <span className="text-5xl mb-6 block transform transition-transform duration-500 
                    group-hover:scale-110 group-hover:rotate-12">{socialMediaTemplates[activeTab].icon}</span>
                  <p className="text-xl font-medium">
                    Enter {activeTab} details to create your QR code
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
