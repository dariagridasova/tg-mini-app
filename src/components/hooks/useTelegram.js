const tg = window.Telegram.WebApp

export function useTelegram() {
    const onClose = () => {
        tg.close();
    }

    const onToggleButton = () => {
        if (tg.BottomButton.isVisible) {
            tg.BottomButton.hide();
        } else {
            tg.BottomButton.show();
        }
    }

    return {
        onClose,
        onToggleButton,
        tg,
        user: tg.initDataUnsafe?.user,
    }
}