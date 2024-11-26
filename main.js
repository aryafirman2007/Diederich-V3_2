process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
import './config.js';
import _0x1e983a, { join } from 'path';
import { platform } from 'process';
import { fileURLToPath, pathToFileURL } from 'url';
import { createRequire } from 'module';
global.__filename = function filename(_0x30552f = import.meta.url, _0x515e50 = platform !== "win32") {
  return _0x515e50 ? /file:\/\/\//.test(_0x30552f) ? fileURLToPath(_0x30552f) : _0x30552f : pathToFileURL(_0x30552f).toString();
};
global.__dirname = function dirname(_0x5ef5bb) {
  return _0x1e983a.dirname(global.__filename(_0x5ef5bb, true));
};
global.__require = function require(_0x498db4 = import.meta.url) {
  return createRequire(_0x498db4);
};
import { readdirSync, statSync, unlinkSync, existsSync, readFileSync, watch } from 'fs';
import _0x65705 from 'yargs';
import { spawn } from 'child_process';
import _0x30a237 from 'lodash';
import _0x43c68b from 'syntax-error';
import _0x3f1974 from 'chalk';
import { tmpdir } from 'os';
import _0x1d5d3c from 'readline';
import { format } from 'util';
import _0x112604 from 'pino';
import _0x25183f from 'ws';
import { useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, makeInMemoryStore, makeCacheableSignalKeyStore, PHONENUMBER_MCC } from '@adiwajshing/baileys';
import { Low, JSONFile } from 'lowdb';
import { makeWASocket, protoType, serialize } from './lib/simple.js';
import { mongoDB, mongoDBV2 } from './lib/zmemek.js';
const {
  CONNECTING
} = _0x25183f;
const {
  chain
} = _0x30a237;
const PORT = process.env.PORT || process.env.SERVER_PORT || 3000;
protoType();
serialize();
global.API = (_0x5b0d07, _0xf5eb50 = '/', _0x3c35fb = {}, _0x445072) => (_0x5b0d07 in global.APIs ? global.APIs[_0x5b0d07] : _0x5b0d07) + _0xf5eb50 + (_0x3c35fb || _0x445072 ? '?' + new URLSearchParams(Object.entries({
  ..._0x3c35fb,
  ...(_0x445072 ? {
    [_0x445072]: global.APIKeys[_0x5b0d07 in global.APIs ? global.APIs[_0x5b0d07] : _0x5b0d07]
  } : {})
})) : '');
global.timestamp = {
  'start': new Date()
};
const __dirname = global.__dirname(import.meta.url);
global.opts = new Object(_0x65705(process.argv.slice(2)).exitProcess(false).parse());
global.prefix = new RegExp('^[' + (opts.prefix || "‎xzXZ/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.\\-").replace(/[|\\{}()[\]^$+*?.\-\^]/g, "\\$&") + ']');
global.db = new Low(/https?:\/\//.test(opts.db || '') ? new cloudDBAdapter(opts.db) : /mongodb(\+srv)?:\/\//i.test(opts.db) ? opts.mongodbv2 ? new mongoDBV2(opts.db) : new mongoDB(opts.db) : new JSONFile((opts._[0] ? opts._[0] + '_' : '') + "database.json"));
global.DATABASE = global.db;
global.loadDatabase = async function loadDatabase() {
  if (db.READ) {
    return new Promise(_0x3b3613 => setInterval(async function () {
      if (!db.READ) {
        clearInterval(this);
        _0x3b3613(db.data == null ? global.loadDatabase() : db.data);
      }
    }, 1000));
  }
  if (db.data !== null) {
    return;
  }
  db.READ = true;
  await db.read()["catch"](console.error);
  db.READ = null;
  db.data = {
    'users': {},
    'chats': {},
    'stats': {},
    'msgs': {},
    'sticker': {},
    'settings': {},
    ...(db.data || {})
  };
  global.db.chain = chain(db.data);
};
loadDatabase();
const useStore = !process.argv.includes("--use-store");
const usePairingCode = !process.argv.includes("--use-pairing-code");
const useMobile = process.argv.includes("--mobile");
var question = function (_0x37e582) {
  return new Promise(function (_0x2b3519) {
    rl.question(_0x37e582, _0x2b3519);
  });
};
const rl = _0x1d5d3c.createInterface({
  'input': process.stdin,
  'output': process.stdout
});
const store = useStore ? makeInMemoryStore({
  'level': "silent"
}) : undefined;
store?.["readFromFile"]("./elaina_store.json");
setInterval(() => {
  store?.["writeToFile"]("./elaina_store.json");
}, 10000);
const {
  version,
  isLatest
} = await fetchLatestBaileysVersion();
const {
  state,
  saveCreds
} = await useMultiFileAuthState("./sessions");
const connectionOptions = {
  'version': version,
  'logger': _0x112604({
    'level': "silent"
  }),
  'printQRInTerminal': !usePairingCode,
  'browser': ["Mac OS", "Safari", "10.15.7"],
  'auth': {
    'creds': state.creds,
    'keys': makeCacheableSignalKeyStore(state.keys, _0x112604().child({
      'level': "silent",
      'stream': "store"
    }))
  },
  'getMessage': async _0x3879b5 => {
    const _0x1ee00e = await store.loadMessage(_0x3879b5.remoteJid, _0x3879b5.id);
    return _0x1ee00e?.["message"] || undefined;
  },
  'generateHighQualityLinkPreview': true,
  'patchMessageBeforeSending': _0xa1da3c => {
    const _0x49a275 = !!(_0xa1da3c.buttonsMessage || _0xa1da3c.templateMessage || _0xa1da3c.listMessage);
    if (_0x49a275) {
      _0xa1da3c = {
        'viewOnceMessage': {
          'message': {
            'messageContextInfo': {
              'deviceListMetadataVersion': 0x2,
              'deviceListMetadata': {}
            },
            ..._0xa1da3c
          }
        }
      };
    }
    return _0xa1da3c;
  }
};
global.conn = makeWASocket(connectionOptions);
conn.isInit = false;
if (usePairingCode && !conn.authState.creds.registered) {
  if (useMobile) {
    throw new Error("Cannot use pairing code with mobile api");
  }
  let phoneNumber = '';
  do {
    phoneNumber = await question(_0x3f1974.blueBright("The password is correct. Now Input a Valid number start with region code. Example : 62xxx:\n"));
  } while (!Object.keys(PHONENUMBER_MCC).some(_0x35fe36 => phoneNumber.startsWith(_0x35fe36)));
  rl.close();
  phoneNumber = phoneNumber.replace(/\D/g, '');
  console.log(_0x3f1974.bgWhite(_0x3f1974.blue("Generating code...")));
  setTimeout(async () => {
    let _0x2194d3 = await conn.requestPairingCode(phoneNumber);
    _0x2194d3 = _0x2194d3?.["match"](/.{1,4}/g)?.["join"]('-') || _0x2194d3;
    console.log(_0x3f1974.black(_0x3f1974.bgGreen("Your Pairing Code : ")), _0x3f1974.black(_0x3f1974.white(_0x2194d3)));
  }, 3000);
}
if (!opts.test) {
  (await import("./server.js"))["default"](PORT);
  setInterval(async () => {
    if (global.db.data) {
      await global.db.write()["catch"](console.error);
    }
    clearTmp();
  }, 60000);
}
function clearTmp() {
  const _0x5b8a05 = [tmpdir(), join(__dirname, "./tmp")];
  const _0x296075 = [];
  _0x5b8a05.forEach(_0x428c74 => readdirSync(_0x428c74).forEach(_0x123813 => _0x296075.push(join(_0x428c74, _0x123813))));
  return _0x296075.map(_0x147bdc => {
    const _0x338b52 = statSync(_0x147bdc);
    if (_0x338b52.isFile() && Date.now() - _0x338b52.mtimeMs >= 180000) {
      return unlinkSync(_0x147bdc);
    }
    return false;
  });
}
function clearSessions(_0x9fb10d = "sessions") {
  let _0xdeaf9c = [];
  readdirSync(_0x9fb10d).forEach(_0x87c274 => _0xdeaf9c.push(join(_0x9fb10d, _0x87c274)));
  return _0xdeaf9c.map(_0x276f46 => {
    let _0x43da6a = statSync(_0x276f46);
    if (_0x43da6a.isFile() && Date.now() - _0x43da6a.mtimeMs >= 7200000) {
      console.log("Deleted sessions", _0x276f46);
      return unlinkSync(_0x276f46);
    }
    return false;
  });
}
async function connectionUpdate(_0x57db8a) {
  const {
    receivedPendingNotifications: _0x516438,
    connection: _0xbe6900,
    lastDisconnect: _0x279ca1,
    isOnline: _0x8fb1e8,
    isNewLogin: _0xabeb17
  } = _0x57db8a;
  global.stopped = _0xbe6900;
  if (_0xabeb17) {
    conn.isInit = true;
  }
  if (_0xbe6900 == "connecting") {
    console.log(_0x3f1974.redBright("⚡ Mengaktifkan Bot, Mohon tunggu sebentar..."));
  } else if (_0xbe6900 == "open") {
    console.log(_0x3f1974.green("✅ Tersambung"));
  }
  if (_0x8fb1e8 == true) {
    console.log(_0x3f1974.green("Status Aktif"));
  } else if (_0x8fb1e8 == false) {
    console.log(_0x3f1974.red("Status Mati"));
  }
  if (_0x516438) {
    console.log(_0x3f1974.yellow("Menunggu Pesan Baru"));
  }
  if (_0xbe6900 == "open") {
    conn.sendMessage("6283129627886@s.whatsapp.net", {
      'text': "- BOT DIEDERICH V7.2 TELAH AKTIF\nBOT INI MILIK ARFUR117"
    });
  }
  if (_0xbe6900 == "close") {
    console.log(_0x3f1974.red("⏱️ koneksi terputus & mencoba menyambung ulang..."));
  }
  global.timestamp.connect = new Date();
  if (_0x279ca1 && _0x279ca1.error && _0x279ca1.error.output && _0x279ca1.error.output.statusCode !== DisconnectReason.loggedOut && conn.ws.readyState !== CONNECTING) {
    console.log(await global.reloadHandler(true));
  }
  if (global.db.data == null) {
    await global.loadDatabase();
  }
}
process.on("uncaughtException", console.error);
let isInit = true;
let handler = await import("./handler.js");
global.reloadHandler = async function (_0x16773e) {
  try {
    const _0x1fdb93 = await import("./handler.js?update=" + Date.now())["catch"](console.error);
    if (Object.keys(_0x1fdb93 || {}).length) {
      handler = _0x1fdb93;
    }
  } catch (_0x3e3943) {
    console.error(_0x3e3943);
  }
  if (_0x16773e) {
    const _0x4abd79 = global.conn.chats;
    try {
      global.conn.ws.close();
    } catch {}
    conn.ev.removeAllListeners();
    global.conn = makeWASocket(connectionOptions, {
      'chats': _0x4abd79
    });
    isInit = true;
  }
  if (!isInit) {
    conn.ev.off("messages.upsert", conn.handler);
    conn.ev.off("group-participants.update", conn.participantsUpdate);
    conn.ev.off("groups.update", conn.groupsUpdate);
    conn.ev.off("message.delete", conn.onDelete);
    conn.ev.off("connection.update", conn.connectionUpdate);
    conn.ev.off("creds.update", conn.credsUpdate);
  }
  conn.spromote = "@user Sekarang jadi admin!";
  conn.sdemote = "@user Sekarang bukan lagi admin!";
  conn.sDesc = "Deskripsi telah diubah menjadi \n@desc";
  conn.sSubject = "Judul grup telah diubah menjadi \n@subject";
  conn.sIcon = "Icon grup telah diubah!";
  conn.sRevoke = "Link group telah diubah ke \n@revoke";
  conn.sAnnounceOn = "Group telah di tutup!\nsekarang hanya admin yang dapat mengirim pesan.";
  conn.sAnnounceOff = "Group telah di buka!\nsekarang semua peserta dapat mengirim pesan.";
  conn.sRestrictOn = "Edit Info Grup di ubah ke hanya admin!";
  conn.sRestrictOff = "Edit Info Grup di ubah ke semua peserta!";
  conn.handler = handler.handler.bind(global.conn);
  conn.participantsUpdate = handler.participantsUpdate.bind(global.conn);
  conn.groupsUpdate = handler.groupsUpdate.bind(global.conn);
  conn.onDelete = handler.deleteUpdate.bind(global.conn);
  conn.connectionUpdate = connectionUpdate.bind(global.conn);
  conn.credsUpdate = saveCreds.bind(global.conn);
  conn.ev.on("messages.upsert", conn.handler);
  conn.ev.on("group-participants.update", conn.participantsUpdate);
  conn.ev.on("groups.update", conn.groupsUpdate);
  conn.ev.on("message.delete", conn.onDelete);
  conn.ev.on("connection.update", conn.connectionUpdate);
  conn.ev.on("creds.update", conn.credsUpdate);
  isInit = false;
  return true;
};
const pluginFolder = global.__dirname(join(__dirname, "./plugins/index"));
const pluginFilter = _0x19cbda => /\.js$/.test(_0x19cbda);
global.plugins = {};
async function filesInit() {
  for (let _0x114d7b of readdirSync(pluginFolder).filter(pluginFilter)) {
    try {
      let _0x210d60 = global.__filename(join(pluginFolder, _0x114d7b));
      const _0x1c216d = await import(_0x210d60);
      global.plugins[_0x114d7b] = _0x1c216d["default"] || _0x1c216d;
    } catch (_0x5688b2) {
      conn.logger.error(_0x5688b2);
      delete global.plugins[_0x114d7b];
    }
  }
}
filesInit().then(_0x340ab9 => console.log(Object.keys(global.plugins)))["catch"](console.error);
global.reload = async (_0x3ac15f, _0x40a43a) => {
  if (/\.js$/.test(_0x40a43a)) {
    let _0x401a65 = global.__filename(join(pluginFolder, _0x40a43a), true);
    if (_0x40a43a in global.plugins) {
      if (existsSync(_0x401a65)) {
        conn.logger.info("re - require plugin '" + _0x40a43a + "'");
      } else {
        conn.logger.warn("deleted plugin '" + _0x40a43a + "'");
        return delete global.plugins[_0x40a43a];
      }
    } else {
      conn.logger.info("requiring new plugin '" + _0x40a43a + "'");
    }
    let _0x128a6f = _0x43c68b(readFileSync(_0x401a65), _0x40a43a, {
      'sourceType': "module",
      'allowAwaitOutsideFunction': true
    });
    if (_0x128a6f) {
      conn.logger.error("syntax error while loading '" + _0x40a43a + "'\n" + format(_0x128a6f));
    } else {
      try {
        const _0x35b2dd = await import(global.__filename(_0x401a65) + "?update=" + Date.now());
        global.plugins[_0x40a43a] = _0x35b2dd["default"] || _0x35b2dd;
      } catch (_0x1dee3e) {
        conn.logger.error("error require plugin '" + _0x40a43a + "\n" + format(_0x1dee3e) + "'");
      } finally {
        global.plugins = Object.fromEntries(Object.entries(global.plugins).sort(([_0x221ae2], [_0x307277]) => _0x221ae2.localeCompare(_0x307277)));
      }
    }
  }
};
Object.freeze(global.reload);
watch(pluginFolder, global.reload);
await global.reloadHandler();
async function _quickTest() {
  let _0x5372b2 = await Promise.all([spawn("ffmpeg"), spawn("ffprobe"), spawn("ffmpeg", ["-hide_banner", "-loglevel", "error", "-filter_complex", "color", "-frames:v", '1', '-f', "webp", '-']), spawn("convert"), spawn("magick"), spawn('gm'), spawn("find", ["--version"])].map(_0x574793 => {
    return Promise.race([new Promise(_0x2bcbf2 => {
      _0x574793.on("close", _0x1dae06 => {
        _0x2bcbf2(_0x1dae06 !== 127);
      });
    }), new Promise(_0x2ad5a3 => {
      _0x574793.on("error", _0x57da35 => _0x2ad5a3(false));
    })]);
  }));
  let [_0x26079c, _0x4f957c, _0x32110e, _0x7aab5, _0x568f20, _0x2f52cc, _0x27c617] = _0x5372b2;
  console.log(_0x5372b2);
  let _0x418249 = global.support = {
    'ffmpeg': _0x26079c,
    'ffprobe': _0x4f957c,
    'ffmpegWebp': _0x32110e,
    'convert': _0x7aab5,
    'magick': _0x568f20,
    'gm': _0x2f52cc,
    'find': _0x27c617
  };
  Object.freeze(global.support);
  if (!_0x418249.ffmpeg) {
    conn.logger.warn("Silahkan install ffmpeg terlebih dahulu agar bisa mengirim video");
  }
  if (_0x418249.ffmpeg && !_0x418249.ffmpegWebp) {
    conn.logger.warn("Sticker Mungkin Tidak Beranimasi tanpa libwebp di ffmpeg (--enable-ibwebp while compiling ffmpeg)");
  }
  if (!_0x418249.convert && !_0x418249.magick && !_0x418249.gm) {
    conn.logger.warn("\nINI SCRIPT GRATIS DARI RAPIKZ");
  }
}
setInterval(async () => {
  if (stopped == "close") {
    return;
  }
  let _0x496ae2 = process.uptime() * 1000;
  let _0x5c5982 = clockString(_0x496ae2);
  let _0x512726 = "Bot Aktif dalam waktu : " + _0x5c5982 + "\nNOTE: BOT INI MILIK ArFur117 (ARGO)!!";
  await conn.updateProfileStatus(_0x512726)["catch"](_0x55f568 => _0x55f568);
}, 60000);
function clockString(_0x5bbb9f) {
  let _0x134b94 = isNaN(_0x5bbb9f) ? '--' : Math.floor(_0x5bbb9f / 86400000);
  let _0x4e95b0 = isNaN(_0x5bbb9f) ? '--' : Math.floor(_0x5bbb9f / 3600000) % 24;
  let _0x1ca077 = isNaN(_0x5bbb9f) ? '--' : Math.floor(_0x5bbb9f / 60000) % 60;
  let _0x40bc8e = isNaN(_0x5bbb9f) ? '--' : Math.floor(_0x5bbb9f / 1000) % 60;
  return [_0x134b94, " Hari ", _0x4e95b0, " Jam ", _0x1ca077, " Menit ", _0x40bc8e, " Seconds "].map(_0x617232 => _0x617232.toString().padStart(2, 0)).join('');
}
_quickTest().then(() => conn.logger.info("☑️ Quick Test Done , nama file session ~> creds.json"))["catch"](console.error);