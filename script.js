const greetings = {
    "老师": "亲爱的{name}，在这个蛇年，愿您桃李满天下，教书育人之路如春风化雨，愿您在新的一年里，健康常伴，心想事成，带给学生更多的智慧与启迪！",
    "爸爸": "亲爱的{name}，祝您蛇年快乐，愿您在新的一年里，事业顺利，身体健康，家庭幸福，感恩您的辛勤付出，心中常有温暖与快乐！",
    "妈妈": "亲爱的{name}，在蛇年里，愿您每天都如春花般绚烂，笑容常在，愿您的生活如意，健康常伴，愿我能为您带来更多的快乐与幸福，您是我心中永远的阳光！",
    "领导": "尊敬的{name}，祝您在蛇年中，事业蒸蒸日上，愿您在新的一年里，带领我们走向更辉煌的未来，愿您的家庭幸福，身体健康，更上一层楼！",
    "朋友": "亲爱的{name}，在这蛇年里，愿我们的友谊如春风般温暖，愿你的每一天都充满欢笑与希望，愿你在新的一年里，心想事成，生活美满，快乐常伴！",
    "邻居": "亲爱的{name}，祝您蛇年吉祥，愿您在新的一年里，家庭和睦，生活幸福，愿我们的邻里关系更加融洽，互助共进，共同迎接美好的明天！",
    "同学": "亲爱的{name}，在蛇年里，愿你心想事成，愿我们的友谊在新的一年中更加深厚，携手共进，共同迎接更美好的未来，快乐每一天！",
    "同事": "亲爱的{name}，祝你在蛇年里，工作顺利，事业有成，愿我们在新的一年中更加紧密携手，互助共赢，愿你的每一天都充满激情与动力，快乐工作，幸福生活！",
    "亲戚": "亲爱的{name}，在这蛇年里，愿您家庭幸福，万事如意，愿我们的亲情更加深厚，团圆美满，愿您的每一个愿望都能如愿以偿，生活美满，心情愉快！",
    "长辈": "尊敬的{name}，祝您在蛇年中，健康幸福，愿您在新的一年里，心情愉悦，家庭和睦，用您的智慧和爱心继续引领我们前行，幸福常伴，快乐每一天！"
};

const generalGreetings = [
    "祝{name}在蛇年里，愿春风化雨，带来万事如意，幸福长伴。愿你在新的一年中，心中常存阳光，生活如诗如画，温馨满溢，愿每一个日子都充满欢笑与温暖，愿你的梦想在这蛇年中如星辰般璀璨，照亮前行的路途！",
    "愿{name}在这蛇年之际，心中常存阳光，生活如诗如画，温馨满溢。愿你在新的一年里，所有的愿望都能如愿以偿，家庭和睦，事业蒸蒸日上，愿你的生活如春风拂面，温暖而幸福，愿每一天都如盛开的花朵，绚烂夺目！",
    "祝{name}新春快乐，愿你的每一天都如盛开的花朵，绚烂夺目，愿你在新的一年里，岁月静好，心中常有温暖，生活如意，愿你的每一个梦想都能在这蛇年中绽放光彩，愿幸福与健康常伴你左右，愿你的人生如画卷般绚丽多姿！"
];

document.addEventListener('DOMContentLoaded', () => {
    const homePage = document.getElementById('homePage');
    const resultPage = document.getElementById('resultPage');
    const nameInput = document.getElementById('nameInput');
    const generateBtn = document.getElementById('generateBtn');
    const greetingText = document.getElementById('greetingText');
    const copyBtn = document.getElementById('copyBtn');
    const changeBtn = document.getElementById('changeBtn');
    const backBtn = document.getElementById('backBtn');

    let currentGreeting = '';

    function generateGreeting(name) {
        const keywords = Object.keys(greetings);
        for (let keyword of keywords) {
            if (name.includes(keyword)) {
                changeBtn.style.display = 'none';
                return greetings[keyword].replace('{name}', name);
            }
        }
        changeBtn.style.display = 'inline-block';
        return generalGreetings[Math.floor(Math.random() * generalGreetings.length)].replace('{name}', name);
    }

    generateBtn.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (!name) {
            alert('请输入拜年对象');
            return;
        }
        currentGreeting = generateGreeting(name);
        greetingText.textContent = currentGreeting;
        homePage.classList.add('hidden');
        resultPage.classList.remove('hidden');
    });

    copyBtn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(currentGreeting);
            alert('祝福语已复制到剪贴板');
        } catch (err) {
            alert('复制失败，请手动复制');
        }
    });

    changeBtn.addEventListener('click', () => {
        const name = nameInput.value.trim();
        currentGreeting = generateGreeting(name);
        greetingText.textContent = currentGreeting;
    });

    backBtn.addEventListener('click', () => {
        resultPage.classList.add('hidden');
        homePage.classList.remove('hidden');
        changeBtn.style.display = 'inline-block';
    });
});