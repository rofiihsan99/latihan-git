# ---------- Interactive Shell Check ----------
case $- in
    *i*) ;;
      *) return;;
esac

# ---------- History Settings ----------
HISTCONTROL=ignoreboth
shopt -s histappend
HISTSIZE=1000
HISTFILESIZE=2000
shopt -s checkwinsize

# ---------- Colors ----------
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

# ---------- Prompt ----------
case "$TERM" in
    xterm-color|*-256color) color_prompt=yes;;
esac

if [ "$color_prompt" = yes ]; then
    PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]ROFIIHSAN\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ '
else
    PS1='${debian_chroot:+($debian_chroot)}ROFIIHSAN:\w\$ '
fi
unset color_prompt

# ---------- Aliases ----------
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'
alias grep='grep --color=auto'
alias rm='rm -i'
alias pt='sudo powertop'
alias buka='micro ~/.bashrc'
alias fix='source ~/.bashrc'
alias file='cd /media/linuxmint/3cea4674-764e-40af-8eab-c81f32c1e3aa/kode'
alias cpp='cd /media/linuxmint/3cea4674-764e-40af-8eab-c81f32c1e3aa/kode/cpp'
alias jas='cd /media/linuxmint/3cea4674-764e-40af-8eab-c81f32c1e3aa/kode/js'

# update system & flatpak
up()
{
    sudo apt update && sudo apt dist-upgrade -y
    sudo apt autoremove -y && sudo apt autoclean
}

pak()
{
    if command -v flatpak &> /dev/null; then
    {
        flatpak update -y && flatpak uninstall --unused -y
    }
    fi
}

# Micro Wrapper
micro() {
    if [ -z "$1" ]; then command micro; return; fi
    if [ -f "$1" ]; then command micro "$1"
    else
        read -p "File '$1' belum ada. Buat baru? (y/n): " konfirmasi
        [[ $konfirmasi =~ ^[Yy]$ ]] && command micro "$1" || echo "Dibatalkan."
    fi
}

# C++ Compile & Run
las()
{
    local terbaru=$(command ls -t *.cpp 2>/dev/null | head -1)
    if [ -z "$terbaru" ]; then
        echo "Maaf, tidak ada file .cpp di folder ini!"
        return 1
    fi
    local output="${terbaru%.*}"
   
    if g++ -O2 -std=c++17 "$terbaru" -o "$output"; then
        echo "--- Berhasil Compile: $terbaru ---"
        ./"$output"
        echo ""
    else
        echo "--- Compile Gagal! Cek lagi kodenya ---"
    fi
}

ol() {
    local ekstensi="${1:-cpp}"
    local terbaru=$(command ls -t *."$ekstensi" 2>/dev/null | head -1)
    [ -z "$terbaru" ] && { echo "Tidak ada file .$ekstensi!"; return 1; }
    micro "$terbaru"
}

as() {
    local terbaru=$(find . -maxdepth 1 -name "*.js" -type f -printf "%T@ %p\n" 2>/dev/null | sort -n | tail -1 | cut -d' ' -f2-)
    
    if [ -z "$terbaru" ]; then
        echo -e "${RED}Tidak ada file .js yang ditemukan!${NC}"
        return 1
    fi
    
    micro "$terbaru"
}

js() {
    local terbaru=$(command ls -t *.js 2>/dev/null | head -1)
    [ -z "$terbaru" ] && { echo "Tidak ada file .js!"; return 1; }
    node "$terbaru"
}

apt() {
    if [[ "$1" =~ ^(remove|purge|autoremove)$ ]]; then
        echo -e "${YELLOW}Perintah terdeteksi: apt $@${NC}"
        sudo /usr/bin/apt "$@" --dry-run
        read -p "Lanjutkan? (y/N): " jawaban
        [[ "${jawaban,,}" =~ ^y$ ]] && sudo /usr/bin/apt "$@" || echo "Dibatalkan."
    else
        sudo /usr/bin/apt "$@"
    fi
}

ls() {
    local file_count=$(command ls -1A | wc -l)
    local ls_cmd="command ls -lhv --color=always --group-directories-first"
    if [ "$file_count" -gt 150 ]; then $ls_cmd "$@" | less -R
    else $ls_cmd "$@"; echo -e "\n${YELLOW}Jumlah file : $file_count${NC}"; fi
}

# neofetch 
clear
neofetch
   
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
