// FAQ Knowledge Base (Enhanced with category IDs)
const faqDatabase = {
    timing: {
        category: 'timing',
        response: 'Our institute timings are:\n• Monday to Friday: 8:00 AM - 6:00 PM\n• Saturday: 9:00 AM - 4:00 PM\n• Sunday: Closed'
    },
    fees: {
        category: 'fees',
        response: 'Our course fees vary by program:\n• Certificate Courses: ₹15,000 - ₹25,000\n• Diploma Programs: ₹50,000 - ₹80,000\n• Degree Programs: ₹1,50,000 - ₹3,00,000\n\nWe offer installment options and scholarships!'
    },
    contact: {
        category: 'contact',
        response: 'You can reach us at:\n📞 Phone: +91-9876543210\n📧 Email: info@techinstitute.edu\n🌐 Website: www.techinstitute.edu\n📍 Address: 123 Education Street, Pune, Maharashtra'
    },
    courses: {
        category: 'courses',
        response: 'We offer various courses:\n• Computer Science & IT\n• Business Management\n• Digital Marketing\n• Data Science & AI\n• Graphic Design\n• Web Development\n\nWould you like details about any specific course?'
    },
    admission: {
        category: 'admission',
        response: 'Admission process:\n1. Fill online application form\n2. Submit required documents\n3. Attend entrance test/interview\n4. Pay admission fee\n\nAdmissions are open! Visit our website or contact us for the application form.'
    },
    eligibility: {
        category: 'eligibility',
        response: 'Eligibility criteria:\n• Certificate: 10th pass\n• Diploma: 12th pass\n• Degree: 12th pass with 50% marks\n\nSpecific courses may have additional requirements. Please specify the course for detailed criteria.'
    },
    scholarship: {
        category: 'scholarship',
        response: 'We offer several scholarships:\n• Merit-based: Up to 50% fee waiver\n• Need-based: Up to 30% fee waiver\n• Sports quota: Up to 40% fee waiver\n\nContact our admission office for scholarship application details.'
    },
    faculty: {
        category: 'faculty',
        response: 'Our faculty includes:\n• 50+ experienced professors\n• Industry experts as guest lecturers\n• Average experience: 10+ years\n• Many hold PhD degrees\n\nAll faculty members are dedicated to student success!'
    },
    placement: {
        category: 'placement',
        response: 'Placement highlights:\n• 85% placement rate\n• 200+ recruiting companies\n• Average package: ₹4.5 LPA\n• Highest package: ₹12 LPA\n• Dedicated placement cell support'
    },
    facilities: {
        category: 'facilities',
        response: 'Our facilities include:\n• Modern computer labs\n• Well-stocked library\n• High-speed WiFi\n• Cafeteria\n• Sports complex\n• Auditorium\n• Hostel accommodation'
    },
    hostel: {
        category: 'hostel',
        response: 'Hostel facilities:\n• Separate boys and girls hostels\n• AC and non-AC rooms\n• Mess facility included\n• 24/7 security\n• Fees: ₹40,000 - ₹60,000 per year\n\nLimited seats available - apply early!'
    },
    duration: {
        category: 'duration',
        response: 'Course duration:\n• Certificate: 3-6 months\n• Diploma: 1-2 years\n• Degree: 3-4 years\n\nPart-time and weekend batches are also available!'
    },
    location: {
        category: 'location',
        response: 'We are located at:\n📍 123 Education Street, Pune, Maharashtra - 411001\n\nNearby landmarks:\n• 2 km from Pune Railway Station\n• 500m from City Bus Stand\n• Opposite City Mall'
    },
    batch: {
        category: 'batch',
        response: 'Batch information:\n• Average batch size: 30-40 students\n• Morning and evening batches available\n• Weekend batches for working professionals\n• Small batches ensure personal attention'
    },
    online: {
        category: 'online',
        response: 'Online learning options:\n• Live interactive sessions\n• Recorded lectures available\n• Same certification as offline\n• Flexible timings\n• 30% fee discount for online courses'
    }
};

// Enhanced pattern matching using semantic similarity
function findBestMatch(userInput) {
    // Use the synonym dictionary to get matched category
    const matchResult = getMatchedCategory(userInput);
    
    if (matchResult && faqDatabase[matchResult.category]) {
        return {
            response: faqDatabase[matchResult.category].response,
            category: matchResult.category,
            matchedKeywords: matchResult.matchedKeywords,
            allMatches: matchResult.allMatches
        };
    }
    
    return null;
}

// Default response when no match found
function getDefaultResponse() {
    return "I'm not sure about that. I can help you with:\n\n• Institute timings\n• Course fees\n• Contact information\n• Available courses\n• Admission process\n• Eligibility criteria\n• Scholarships\n• Faculty details\n• Placement statistics\n• Campus facilities\n• Hostel information\n• Course duration\n• Location & directions\n• Batch information\n• Online courses\n\nPlease ask me anything from the above topics!";
}

// Create message element
function createMessageElement(type, text, matchInfo = null) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    
    const avatarDiv = document.createElement('div');
    avatarDiv.className = 'message-avatar';
    
    if (type === 'bot') {
        avatarDiv.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 8V4H8"/>
                <rect width="16" height="12" x="4" y="8" rx="2"/>
                <path d="M2 14h2"/>
                <path d="M20 14h2"/>
                <path d="M15 13v2"/>
                <path d="M9 13v2"/>
            </svg>
        `;
    } else {
        avatarDiv.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
            </svg>
        `;
    }
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = text;
    
    // Add match information if available (for debugging/transparency)
    if (matchInfo && matchInfo.matchedKeywords && matchInfo.matchedKeywords.length > 0) {
        const matchInfoDiv = document.createElement('div');
        matchInfoDiv.className = 'matched-info';
        matchInfoDiv.textContent = `Matched keywords: ${matchInfo.matchedKeywords.join(', ')}`;
        contentDiv.appendChild(matchInfoDiv);
    }
    
    if (type === 'bot') {
        messageDiv.appendChild(avatarDiv);
        messageDiv.appendChild(contentDiv);
    } else {
        messageDiv.appendChild(contentDiv);
        messageDiv.appendChild(avatarDiv);
    }
    
    return messageDiv;
}

// Add message to chat
function addMessage(type, text, matchInfo = null) {
    const chatMessages = document.getElementById('chat-messages');
    
    // Create messages container if it doesn't exist
    let messagesContainer = chatMessages.querySelector('.messages-container');
    if (!messagesContainer) {
        messagesContainer = document.createElement('div');
        messagesContainer.className = 'messages-container';
        chatMessages.appendChild(messagesContainer);
    }
    
    const messageElement = createMessageElement(type, text, matchInfo);
    messagesContainer.appendChild(messageElement);
    
    // Scroll to bottom
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Handle user input
function handleUserInput() {
    const input = document.getElementById('user-input');
    const userText = input.value.trim();
    
    if (!userText) return;
    
    // Add user message
    addMessage('user', userText);
    
    // Clear input
    input.value = '';
    
    // Get bot response with slight delay
    setTimeout(() => {
        const matchResult = findBestMatch(userText);
        
        if (matchResult) {
            addMessage('bot', matchResult.response, {
                category: matchResult.category,
                matchedKeywords: matchResult.matchedKeywords
            });
        } else {
            addMessage('bot', getDefaultResponse());
        }
    }, 500);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    
    // Send button click
    sendBtn.addEventListener('click', handleUserInput);
    
    // Enter key press
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleUserInput();
        }
    });
    
    // Add welcome message
    addMessage('bot', 'Hello! Welcome to Tech Institute. How can I help you today? You can ask me about timings, fees, courses, admissions, and more!');
});