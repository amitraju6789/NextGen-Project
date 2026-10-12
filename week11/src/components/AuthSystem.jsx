import React, { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, CheckCircle, ShieldAlert, ArrowRight, ShieldCheck, LogOut, Activity, Clock, CheckCircle2, UserCheck, KeyRound } from 'lucide-react';
import { validateEmail, getPasswordStrength } from '../utils/validation';
export default function AuthSystem() {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };
  const validateForm = () => {
    let newErrors = {};
    if (!isLogin && !formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }
    if (!formData.email) {
      newErrors.email = 'Email address is required.';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long.';
    }
    if (!isLogin) {
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Passwords do not match.';
      }
      if (!formData.agreeTerms) {
        newErrors.agreeTerms = 'You must accept the terms & conditions.';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate Successful Auth & Redirect to Dashboard
      setUser({
        name: isLogin ? (formData.email.split('@')[0]) : formData.fullName,
        email: formData.email,
        authType: isLogin ? 'Sign In (Login)' : 'Sign Up (Registration)',
        time: new Date().toLocaleTimeString(),
      });
    }
  };
  const handleLogout = () => {
    setUser(null);
    setFormData({
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      agreeTerms: false,
    });
    setErrors({});
  };
  const strength = getPasswordStrength(formData.password);
  // LOGGED-IN DASHBOARD PAGE
  if (user) {
    return (
      <div className="w-full max-w-2xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-5 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-[1px] shadow-lg shadow-emerald-500/20">
              <div className="w-full h-full bg-slate-950 rounded-[15px] flex items-center justify-center font-bold text-emerald-400 text-lg">
                {user.name.charAt(0).toUpperCase()}
              </div>
            </div>
            <div className="text-left">
              <h2 className="text-lg font-bold text-slate-100">{user.name}</h2>
              <p className="text-xs text-slate-400">{user.email}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-bold hover:bg-rose-500/20 transition-all"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>
        <div className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-3 text-emerald-400 text-xs font-semibold">
          <CheckCircle2 className="w-5 h-5 shrink-0" />
          <div>
            <p className="font-bold text-sm">Authentication Successful!</p>
            <p className="text-slate-400 text-[11px] mt-0.5">
              Verified via <span className="text-emerald-300 font-bold">{user.authType}</span> at {user.time}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-slate-950 border border-slate-800/80 rounded-2xl text-left">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider">Account Status</span>
              <UserCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-base font-bold text-slate-100">Verified User</p>
          </div>
          <div className="p-4 bg-slate-950 border border-slate-800/80 rounded-2xl text-left">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider">Security Level</span>
              <ShieldCheck className="w-4 h-4 text-blue-400" />
            </div>
            <p className="text-base font-bold text-slate-100">2FA Protected</p>
          </div>
          <div className="p-4 bg-slate-950 border border-slate-800/80 rounded-2xl text-left">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider">Session Active</span>
              <Clock className="w-4 h-4 text-amber-400" />
            </div>
            <p className="text-base font-bold text-slate-100">{user.time}</p>
          </div>
        </div>
        <div className="p-5 bg-slate-950 border border-slate-800 rounded-2xl text-left space-y-3">
          <h3 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <Activity className="w-4 h-4 text-blue-400" />
            <span>Recent Auth Activity Stream</span>
          </h3>
          <div className="space-y-2 text-xs font-mono">
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center">
              <span className="text-slate-300">Form Input Validation Check</span>
              <span className="text-emerald-400 font-bold">PASSED</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center">
              <span className="text-slate-300">Password Policy Requirements</span>
              <span className="text-emerald-400 font-bold">MATCHED</span>
            </div>
            <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center">
              <span className="text-slate-300">Controlled State Sync</span>
              <span className="text-blue-400 font-bold">100% OK</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  // LOGIN / REGISTRATION FORM PAGE
  return (
    <div className="w-full max-w-md mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center justify-center gap-2 mb-6 text-blue-400 font-extrabold text-xs tracking-wider uppercase">
        <ShieldCheck className="w-5 h-5" />
        <span>NEXAFLOW AUTH PORTAL</span>
      </div>
      {/* Tab Switcher */}
      <div className="flex bg-slate-950 p-1.5 rounded-2xl mb-6 border border-slate-800/80">
        <button
          type="button"
          onClick={() => { setIsLogin(false); setErrors({}); }}
          className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
            !isLogin ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Register (Sign Up)
        </button>
        <button
          type="button"
          onClick={() => { setIsLogin(true); setErrors({}); }}
          className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
            isLogin ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30' : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          Login (Sign In)
        </button>
      </div>
      <div className="text-center mb-6">
        <h2 className="text-xl font-bold text-slate-100">
          {isLogin ? 'Welcome Back' : 'Create an Account'}
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          {isLogin ? 'Enter your credentials to access your account dashboard' : 'Fill in the fields below to register your account'}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        {/* Full Name Field (Only on Registration) */}
        {!isLogin && (
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Full Name</label>
            <div className="relative">
              <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                name="fullName"
                placeholder="Amit Kumar Singh"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full bg-slate-950 border ${
                  errors.fullName ? 'border-rose-500' : 'border-slate-800'
                } rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500 transition-all`}
              />
            </div>
            {errors.fullName && (
              <p className="text-[10px] text-rose-400 mt-1 flex items-center gap-1">
                <ShieldAlert className="w-3 h-3" /> {errors.fullName}
              </p>
            )}
          </div>
        )}
        {/* Email Field */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Email Address</label>
          <div className="relative">
            <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="email"
              name="email"
              placeholder="amit.singh@dev.io"
              value={formData.email}
              onChange={handleChange}
              className={`w-full bg-slate-950 border ${
                errors.email ? 'border-rose-500' : 'border-slate-800'
              } rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500 transition-all`}
            />
          </div>
          {errors.email && (
            <p className="text-[10px] text-rose-400 mt-1 flex items-center gap-1">
              <ShieldAlert className="w-3 h-3" /> {errors.email}
            </p>
          )}
        </div>
        {/* Password Field */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">Password</label>
          <div className="relative">
            <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className={`w-full bg-slate-950 border ${
                errors.password ? 'border-rose-500' : 'border-slate-800'
              } rounded-xl pl-10 pr-10 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500 transition-all`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>
          {errors.password && (
            <p className="text-[10px] text-rose-400 mt-1 flex items-center gap-1">
              <ShieldAlert className="w-3 h-3" /> {errors.password}
            </p>
          )}
          {/* Password Strength Meter (Only on Registration) */}
          {!isLogin && formData.password && (
            <div className="mt-2 space-y-1">
              <div className="flex justify-between items-center text-[10px]">
                <span className="text-slate-400">Password Strength:</span>
                <span className={`font-bold ${
                  strength.label === 'Strong' ? 'text-emerald-400' : strength.label === 'Medium' ? 'text-amber-400' : 'text-rose-400'
                }`}>{strength.label}</span>
              </div>
              <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden border border-slate-800">
                <div
                  className={`h-full transition-all duration-300 ${strength.color}`}
                  style={{ width: `${strength.score}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
        {/* Confirm Password (Only on Registration) */}
        {!isLogin && (
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">Confirm Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full bg-slate-950 border ${
                  errors.confirmPassword ? 'border-rose-500' : 'border-slate-800'
                } rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-blue-500 transition-all`}
              />
            </div>
            {errors.confirmPassword && (
              <p className="text-[10px] text-rose-400 mt-1 flex items-center gap-1">
                <ShieldAlert className="w-3 h-3" /> {errors.confirmPassword}
              </p>
            )}
          </div>
        )}
        {/* Terms Checkbox (Only on Registration) */}
        {!isLogin && (
          <div>
            <label className="flex items-center gap-2 text-xs text-slate-400 cursor-pointer">
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                className="rounded border-slate-700 bg-slate-950 text-blue-600 focus:ring-0"
              />
              <span>I agree to the Terms & Conditions</span>
            </label>
            {errors.agreeTerms && (
              <p className="text-[10px] text-rose-400 mt-1 flex items-center gap-1">
                <ShieldAlert className="w-3 h-3" /> {errors.agreeTerms}
              </p>
            )}
          </div>
        )}
        {/* Dynamic Button Label: Sign Up vs Sign In */}
        <button
          type="submit"
          className="w-full mt-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-600/25"
        >
          <span>{isLogin ? 'Sign In' : 'Sign Up (Create Account)'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
