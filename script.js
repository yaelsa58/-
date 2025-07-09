const messages = [
    {
        sender: 'shahar',
        name: 'שחר',
        text: 'בנות!!! תראו מה קיבלתי באפליקציה 😰😰😰',
        time: '14:23',
        type: 'sent'
    },
    {
        sender: 'shahar',
        name: 'שחר', 
        text: 'הדופק שלי עלה מ - 75 ל - 140 רק כי עליתי במדרגות לכיתה!!!',
        time: '14:23',
        type: 'sent'
    },
    {
        sender: 'shahar',
        name: 'שחר',
        text: 'האם יש לי בעיה בלב?? 💔😭',
        time: '14:24',
        type: 'sent'
    },
    {
        sender: 'noa',
        name: 'נועה',
        text: 'וואי שחר אל תפחדי! 🤗',
        time: '14:24',
        type: 'received'
    },
    {
        sender: 'noa',
        name: 'נועה',
        text: 'אולי האפליקציה שגויה? אצלי הדופק תמיד 70 ולא משתנה...',
        time: '14:25',
        type: 'received'
    },
    {
        sender: 'mia',
        name: 'מיה',
        text: 'רגע רגע!! 🤔',
        time: '14:25',
        type: 'received'
    },
    {
        sender: 'mia',
        name: 'מיה',
        text: 'אחי הספורטאי אמר לי שאצלו הדופק מגיע ל - 160 כשהוא רץ מרתון! 🏃‍♂️💨',
        time: '14:26',
        type: 'received'
    },
    {
        sender: 'mia',
        name: 'מיה',
        text: 'אולי זה בכלל נורמלי? 🤷‍♀️',
        time: '14:26',
        type: 'received'
    },
    {
        sender: 'rona',
        name: 'רונה',
        text: 'לא לא לא! 😟',
        time: '14:27',
        type: 'received'
    },
    {
        sender: 'rona',
        name: 'רונה',
        text: 'המורה לחינוך גופני אמרה שדופק גבוה זה מסוכן ואסור להגזים בספורט!',
        time: '14:27',
        type: 'received'
    },
    {
        sender: 'rona',
        name: 'רונה',
        text: 'שחר תלכי לרופא! ⚠️',
        time: '14:28',
        type: 'received'
    },
    {
        sender: 'shahar',
        name: 'שחר',
        text: 'אני כל כך מבולבלת! 😵‍💫',
        time: '14:28',
        type: 'sent'
    },
    {
        sender: 'shahar',
        name: 'שחר',
        text: 'איך יכול להיות שלאותו לב יש דופק כל כך שונה במצבים שונים???',
        time: '14:29',
        type: 'sent'
    },
    {
        sender: 'shahar',
        name: 'שחר',
        text: 'ומה בכלל קורה בגוף שלנו כשהלב פועם מהר? 🤔💭',
        time: '14:30',
        type: 'sent'
    },
    {
        sender: 'shahar',
        name: 'שחר',
        text: 'זהו! אני הולכת להיות בלשית מדעית ולמצוא תשובות! 🕵️‍♀️🔍',
        time: '14:31',
        type: 'sent'
    },
    {
        sender: 'noa',
        name: 'נועה',
        text: 'איזה רעיון מגניב! 💡',
        time: '14:31',
        type: 'received'
    },
    {
        sender: 'mia',
        name: 'מיה',
        text: 'אני איתך! בואי נחקור ביחד! 🤝',
        time: '14:32',
        type: 'received'
    },
    {
        sender: 'rona',
        name: 'רונה',
        text: 'כן! צריך להבין את זה לפני שנפחד מכל דבר 😅',
        time: '14:32',
        type: 'received'
    }
];

let messageIndex = 0;
const chatContainer = document.getElementById('chatContainer');

function addMessage() {
    if (messageIndex < messages.length) {
        const message = messages[messageIndex];
        
        // Add typing indicator
        if (message.type === 'received') {
            addTypingIndicator();
            setTimeout(() => {
                removeTypingIndicator();
                createMessageElement(message);
                messageIndex++;
                setTimeout(addMessage, 1000);
            }, 1500);
        } else {
            createMessageElement(message);
            messageIndex++;
            setTimeout(addMessage, 800);
        }
    } else {
        // Add final investigation box and back button
        setTimeout(() => {
            const investigationBox = document.createElement('div');
            investigationBox.className = 'investigation-box';
            investigationBox.innerHTML = `
                <div style="font-weight: bold; margin-bottom: 10px;">🎯 המשימה החקירתית</div>
                <div style="font-size: 13px;">שחר והחברות החליטו לחקור ולפתור את תעלומת הדופק המסתורי!</div>
                <div style="margin-top: 10px; font-size: 12px;">🔬 המשך בפעילות הבאה...</div>
            `;
            chatContainer.appendChild(investigationBox);
            
            // Add back button
            const backButton = document.createElement('button');
            backButton.className = 'back-button';
            backButton.innerHTML = '🔙 חזרה למרחב הלימוד';
            backButton.onclick = function() {
                window.history.back();
            };
            chatContainer.appendChild(backButton);
            
            scrollToBottom();
        }, 2000);
    }
}

function createMessageElement(message) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${message.type}`;
    
    const bubbleDiv = document.createElement('div');
    bubbleDiv.className = 'message-bubble';
    
    if (message.type === 'received') {
        const senderName = document.createElement('div');
        senderName.className = `sender-name ${message.sender}`;
        senderName.textContent = message.name;
        bubbleDiv.appendChild(senderName);
    }
    
    const textDiv = document.createElement('div');
    textDiv.className = 'message-text';
    textDiv.textContent = message.text;
    bubbleDiv.appendChild(textDiv);
    
    const timeDiv = document.createElement('div');
    timeDiv.className = 'message-time';
    timeDiv.textContent = message.time;
    if (message.type === 'sent') {
        timeDiv.innerHTML += ' ✓✓';
    }
    bubbleDiv.appendChild(timeDiv);
    
    messageDiv.appendChild(bubbleDiv);
    chatContainer.appendChild(messageDiv);
    
    scrollToBottom();
}

function addTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing-indicator';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <div class="typing-dots">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
    `;
    chatContainer.appendChild(typingDiv);
    scrollToBottom();
}

function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

function scrollToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Start the conversation when page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(addMessage, 1000);
});